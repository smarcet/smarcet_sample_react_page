import React from "react";
import ProductInfo from "../components/product-info";
import ProductSlide from "../components/product-slide";
import style from "../styles/product-carousel.module.less";
import {CSSTransitionGroup} from "react-transition-group";

class ProductCarousel extends React.Component {

    constructor(props){
        super(props);
        this.onSwapProduct = this.onSwapProduct.bind(this);
    }

    onSwapProduct(ev, currentSlot, currentProduct){
        this.props.nextProduct(ev, currentSlot, currentProduct);
    }

    render(){
        let products = this.props.products;

        return (
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div className="row slides">
                            {products.map((product, index)=> {
                                return <ProductSlide key={index} product={product}/>
                            })}
                    </div>
                    <div className="row basic-text-row">
                        <div className="col-md-12 col-xs-12">
                            <p className="basic-text">Your Introductory wine pack includes</p>
                            <hr className="basic-hr"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <ul className={style.product_info_list}>
                            {products.map((product, index)=> {

                                return <CSSTransitionGroup
                                    transitionName="background"
                                    transitionEnterTimeout={1000}
                                    transitionLeaveTimeout={1000}
                                    key={index}>
                                    <ProductInfo key={product.sku} product={product} slot={index} onSwapProduct={this.onSwapProduct}/>
                                </CSSTransitionGroup>

                            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCarousel;