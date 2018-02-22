import { browserHistory } from 'react-router';
import setAuthToken from './setAuthToken';

export function handleRequest(dispatch, request, type) {
   
  return request.then(({data}) => {
    dispatch({type, payload: data});
  }).catch((err) => {
    if(err.config) {
      handleError(dispatch, err);
    } else {
      console.error(err);
    }
    return Promise.reject();
  })
}

export function handleError(dispatch, {response}, onErrorClose = defaultErrorClose) {
  if(!response) {
    dispatch(openErrorModal("Please check your connection and try again."));
  } else if (response.data && typeof response.data == "string" && !response.data.startsWith("<!")){
    dispatch(openErrorModal(response.data));
  } else if (response.data && Array.isArray(response.data) && response.data.length){
    dispatch(openErrorModal(response.data.join(', ')));
  } else if (response.data && response.data.errors){
    dispatch(openErrorModal(response.data.errors.map((e) => {return e.detail}).join(', ')));
  } else if (response.status == 401) {
    dispatch(signOut());
  } else {
    dispatch(openErrorModal("An error has occured. Please try again in a few minutes."));
  }
}

export function generateSearchQuery(data) {
  data = data ? data : {};
  const queries = Object.keys(data).filter((k) => {return data[k]});
  let query = '?';

  queries.forEach((key, i) => {
    i != 0 ? query += '&' : null;
    query += `${key}=${data[key]}`;
  })
  return query.length > 1 ? query : '';
}

function defaultErrorClose() {
  browserHistory.push('/');
}
