import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends React.Component {

constructor(props) {
  super(props)
}

render() {

    return(
        <div className="body">
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    )
}

}

export default App