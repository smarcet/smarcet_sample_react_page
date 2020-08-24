import React from 'react'
import {connect} from 'react-redux'
import '../styles/checkout.less';

class CheckoutPage extends React.Component {

    render() {
        let {user_email, checkout_wines} = this.props;

        return (
            <React.Fragment>
                <div className="row checkout-results">
                    <h1 className="your-checkout-title">CHECKOUT</h1>
                    <p>
                        Dear {user_email}, here is your selection
                    </p>
                    <ul>
                    {
                        checkout_wines.map((product, index) => {
                           return(
                                <li key={index}>
                                    <div className="row">
                                        <div className="col-md-3 col-xs-3">
                                            <img alt={product.sku}  className="product-thumb" src={`/images/${product.image.desktop}`}/>
                                        </div>
                                        <div className="col-md-9 col-xs-9 col-text">
                                            <p>
                                                <strong>
                                                    {product.title}
                                                </strong>
                                            </p>
                                            <p dangerouslySetInnerHTML={{__html: product.sales_copy}}>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                           );
                        })
                    }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({baseState}) => ({
    user_email: baseState.user_email,
    checkout_wines: baseState.checkout_wines
});

export default connect(
    mapStateToProps,
    {

    }
)(CheckoutPage);