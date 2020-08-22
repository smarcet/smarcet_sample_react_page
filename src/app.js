import React from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import T from 'i18n-react';
import history from './history'
import URI from "urijs";

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
      return (<div className="container-fluid main-container">
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
          <div className="row your-results">
              <div className="col-md-12">
                  <div className="row">
                      <div className="col-md-12">
                          <h1 className="your-results-title">YOUR RESULTS</h1>
                          <p>Based on your interest in <span className="orange-text ">a mix of red,
                              white, American and international wines</span>,
                              we think you’ll love the following selection.</p>
                      </div>
                  </div>
                  <hr/>
                  <div className="row">
                      <div className="col-md-12">
                          &nbsp;
                      </div>
                  </div>
              </div>
          </div>
          <div className="row hero"></div>
          <div className="row checkout"></div>
          <div className="row footer"></div>
      </div>);
    }
}

const mapStateToProps = ({}) => ({

});

export default connect(mapStateToProps, {

})(App);
