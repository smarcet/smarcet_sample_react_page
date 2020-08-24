import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import T from 'i18n-react';
import history from './history'
import LandingPage from './pages/landing'
import CheckoutPage from './pages/checkout'
import wine1_desktop from './images/wine1_desktop.png';
import wine1_mobile from './images/wine1_mobile.png';
import wine2_desktop from './images/wine2_desktop.png';
import wine2_mobile from './images/wine2_mobile.png';

import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 993 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 992 })
    return isMobile ? children : null
}

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
                    <div className="row footer">
                        <div className="row">
                            <div className="col-md-2 col-xs-12">
                                <img className="grapes"/>
                            </div>
                            <div className="col-md-4 col-xs-12 col-md-offset-6 col-help">
                                <p><span className="help-text">Need help?</span> 1-800-347-0948</p>
                            </div>
                        </div>
                        <div className="row row-menu">
                            <div className="col-md-12 col-xs-12">
                                <Desktop>
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12 menu">
                                            <a>How It Works</a>&nbsp;
                                            <a>Our Wines</a>&nbsp;
                                            <a>About Us</a>&nbsp;
                                            <a>Careers</a>&nbsp;
                                            <a>Press</a>&nbsp;
                                            <a>FAQ</a>&nbsp;
                                            <a>Contact Us</a>&nbsp;
                                            <a>Blog</a>&nbsp;
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12 menu">
                                            <a>Terms and Conditions</a> | <a>Privacy Policy</a> | © 2015 Firstleaf, Inc
                                        </div>
                                    </div>
                                </Desktop>
                                <Mobile>
                                    <div className="row">
                                        <div className="col-xs-4 col-menu">
                                            <div className="col-xs-12 menu">
                                                <a>How It Works</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>Our Wines</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>About Us</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>Careers</a>&nbsp;
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-menu">
                                            <div className="col-xs-12 menu">
                                                <a>Press</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>FAQ</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>Contact Us</a>&nbsp;
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>Blog</a>&nbsp;
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-menu">
                                            <div className="col-xs-12 menu">
                                                <a>Terms and Conditions</a>
                                            </div>
                                            <div className="col-xs-12 menu">
                                                <a>Privacy Policy</a>
                                            </div>
                                            <div className="col-xs-12 menu">
                                            © 2015 Firstleaf, Inc
                                            </div>
                                        </div>
                                    </div>
                                </Mobile>
                            </div>
                        </div>
                    </div>

                </div>
            </Router>);
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(App);
