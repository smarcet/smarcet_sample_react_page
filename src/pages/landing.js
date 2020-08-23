import React from 'react'
import { connect } from 'react-redux'
import ProductCarousel from "../components/product-carousel";

class LandingPage extends React.Component {

    render() {

        return (
            <React.Fragment>
            <div className="row your-results">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="your-results-title">YOUR RESULTS</h1>
                            <p className="your-results-text">Based on your interest in <span className="orange-text ">a mix of red,
                              white, American and international wines</span>,
                                we think you’ll love the following selection.</p>
                        </div>
                    </div>
                    <hr className="your-results-text-hr"/>
                    <div className="row">
                        <div className="col-md-12">
                            <ProductCarousel products={this.props.user_wines}/>
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


const mapStateToProps = ({ baseState }) => ({
    ...baseState
});

export default connect(
    mapStateToProps,
    {

    }
)(LandingPage);

