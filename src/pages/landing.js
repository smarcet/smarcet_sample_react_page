import React from 'react'
import {connect} from 'react-redux'
import ProductCarousel from "../components/product-carousel";
import {nextProduct, doCheckout, reloadSelection, resetSelection} from '../actions/product-actions';
import Popup from "reactjs-popup";
import {validateEmail} from '../utils/validators';
import '../styles/landing.less';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            errors: [],
            email: props.user_email,
        };

        this.onNextProduct = this.onNextProduct.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.getTotalRetailPrice = this.getTotalRetailPrice.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.onDoCheckout = this.onDoCheckout.bind(this);
        this.onChange = this.onChange.bind(this);
        this.props.resetSelection();
    }

    onNextProduct(ev, currentSlot, currentProduct) {
        this.props.nextProduct(currentSlot, currentProduct);
    }

    componentWillMount() {
        console.log('componentDidUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        let {reloadSelection} = this.props;

        //resetSelection();
        window.onpopstate = e => {
            // back button pressed
            // restore checkout state to wine selector
            console.log('componentDidUpdate::reload state');
            reloadSelection();
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getTotalPrice() {
        let {user_wines} = this.props;
        let total = 0;
        for (let product of user_wines) {
            total += product.intro_price;
        }
        return `$${parseFloat(total).toFixed(2)}`;
    }

    getTotalRetailPrice() {
        let {user_wines} = this.props;
        let total = 0;
        for (let product of user_wines) {
            total += product.price;
        }
        return `$${parseFloat(total).toFixed(2)}`;
    }

    openModal(ev) {
        ev.preventDefault();
        this.setState({openModal: true});
        return false;
    }

    onDoCheckout(ev) {
        ev.preventDefault();
        let {history} = this.props;
        let {errors, email} = this.state;
        if (errors.hasOwnProperty('email')) return false;
        this.props.doCheckout(email);
        history.push('/checkout');
        return false;
    }

    onChange(ev) {
        let {value, id} = ev.target;
        let errors = {...this.state.errors};
        delete (errors[id]);

        if (!validateEmail(value)) {
            errors[id] = `${id} is not valid.`;
        }

        this.setState({errors: errors, email: value});
    }

    hasErrors(field) {
        let {errors} = this.state;
        if (field in errors) {
            return errors[field];
        }
        return '';
    }

    closeModal() {
        this.setState({openModal: false});
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
                                        <p className="retail-price">(Normal retail
                                            price: {this.getTotalRetailPrice()})</p>
                                        <hr className="retail-price-hr"/>
                                    </div>
                                </div>
                                <div className="flex-center">
                                    <a target="blank" className="call-2-action flex-center" onClick={this.openModal}>GO
                                        TO CHECKOUT</a>
                                </div>
                                <p className="money-back">Money Back Guarantee. Cancel Anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row checkout">
                    <div className="container">
                        <div className="flex-center">
                            <a target="blank" className="call-2-action flex-center" onClick={this.openModal}>GO TO
                                CHECKOUT</a>
                        </div>
                        <p className="help">Questions? <a className="help-link" href="#">View our FAQ</a> or <a
                            className="help-link" href="#">Chat with us.</a></p>
                    </div>
                </div>
                <Popup open={this.state.openModal} onClose={this.closeModal}>
                    <div className="email-modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        <p>Please enter your email</p>
                        <div className="row">
                            <div className="col-md-12 col-xs-12 col-input">
                                <input placeholder="Email Address" autoComplete="email"
                                       type="email"
                                       id="email"
                                       name="email"
                                       className="form-control"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                />
                                {this.hasErrors('email') !== '' &&
                                <p className="error-label">{this.hasErrors('email')}</p>
                                }
                            </div>
                        </div>
                        <div className="flex-center">
                            <a target="blank" className="call-2-action flex-center" onClick={this.onDoCheckout}
                               href="#">CHECKOUT</a>
                        </div>
                    </div>
                </Popup>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({baseState}) => ({
    user_email: baseState.user_email,
    user_wines: baseState.user_wines
});

export default connect(
    mapStateToProps,
    {
        nextProduct, doCheckout, reloadSelection, resetSelection
    }
)(LandingPage);

