export const SearchProductAction = (query) => dispatch => {
    dispatch({
        type: 'SEARCH_PRODUCT',
        payload: [
            { id: 1, label: 'apple1' },
            { id: 2, label: 'banana2' },
            { id: 3, label: 'pear2' }
        ],
      });
}