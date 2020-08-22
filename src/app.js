import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import T from 'i18n-react';
import history from './history'
import LandingPage from './pages/landing'
import CheckoutPage from './pages/checkout'

// here is set by default user lang as en
let language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// language would be something like es-ES or es_ES
// However we store our files with format es.json or en.json
// therefore retrieve only the first 2 digits

if (language.length > 2) {
    language = language.split("-")[0];
    language = language.split("_")[0];
}

//console.log(`user language is ${language}`);

T.setTexts(require(`./i18n/${language}.json`));

class App extends React.PureComponent {

    render() {
        return (<Router history={history}>
            <div className="container-fluid main-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header">
                            <a className="logo">
                                <img alt="Firstleaf"/>
                            </a>
                            <button type="button" className="orange-button">get started</button>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/" strict exact component={LandingPage}/>
                    <Route path="/checkout" strict exact component={CheckoutPage}/>
                </Switch>
                <div className="row footer"></div>
            </div>
        </Router>);
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(App);
