import React from 'react'

class LandingPage extends React.Component {

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default LandingPage;