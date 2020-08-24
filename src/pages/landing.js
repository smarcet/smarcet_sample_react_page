import React from 'react'
import {connect} from 'react-redux'
import ProductCarousel from "../components/product-carousel";
import {nextProduct} from '../actions/product-actions';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.onNextProduct = this.onNextProduct.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.getTotalRetailPrice = this.getTotalRetailPrice.bind(this);
    }

    onNextProduct(ev, currentSlot, currentProduct) {
        this.props.nextProduct(currentSlot, currentProduct);
    }

    getTotalPrice() {
        let {user_wines} = this.props;
        let total = 0;
        for (let product of user_wines) {
            total += product.intro_price;
        }
        return `$${parseFloat(total).toFixed(2)}`;
    }

    getTotalRetailPrice(){
        let {user_wines} = this.props;
        let total = 0;
        for (let product of user_wines) {
            total += product.price;
        }
        return `$${parseFloat(total).toFixed(2)}`;
    }

    render() {

        return (
            <React.Fragment>
                <div className="row your-results basic-text-row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="your-results-title">YOUR RESULTS</h1>
                                <p className="basic-text">Based on your interest in <span className="orange-text ">a mix of red,
                              white, American and international wines</span>,
                                    we think you’ll love the following selection.</p>
                            </div>
                        </div>
                        <hr className="basic-hr"/>
                        <div className="row">
                            <div className="col-md-12">
                                <ProductCarousel products={this.props.user_wines} nextProduct={this.onNextProduct}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 hero-col">
                                <h2 className="header">As an introduction to <span>Firstleaf</span> wine club get these
                                    three wines for</h2>
                                <div className="row">
                                    <div className="col-md-5 col-xs-5">
                                        <span className="price">{this.getTotalPrice()}</span>
                                    </div>
                                    <div className="col-md-2 col-xs-2">
                                        <div className="vertical"></div>
                                    </div>
                                    <div className="col-md-5 col-xs-5">
                                        <p className="taxes">plus tax & $4.95 shipping</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="retail-price">(Normal retail price: {this.getTotalRetailPrice()})</p>
                                        <hr className="retail-price-hr"/>
                                    </div>
                                </div>
                                <div className="flex-center">
                                    <a target="blank" className="call-2-action flex-center" href="#">GO TO CHECKOUT</a>
                                </div>
                                <p className="money-back">Money Back Guarantee. Cancel Anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row checkout">
                    <div className="container">
                        <div className="flex-center">
                            <a target="blank" className="call-2-action flex-center" href="#">GO TO CHECKOUT</a>
                        </div>
                        <p className="help">Questions? <a className="help-link" href="#">View our FAQ</a> or <a className="help-link" href="#">Chat with us.</a></p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = ({baseState}) => ({
    ...baseState
});

export default connect(
    mapStateToProps,
    {
        nextProduct
    }
)(LandingPage);

