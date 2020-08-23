import React from "react";
import ProductInfo from "../components/product-info";
import ProductSlide from "../components/product-slide";
import style from "../styles/product-carousel.module.less";

class ProductCarousel extends React.Component {

    constructor(props){
        super(props);
        this.onSwapProduct = this.onSwapProduct.bind(this);
    }

    onSwapProduct(ev, product){
        console.log("onSwapProduct");
    }

    render(){
        let products = this.props.products;

        return (
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div className="row slides">
                        <div className="col-md-12 col-xs-12">
                            {products.map((product, index)=> {
                                return <ProductSlide key={index} product={product}/>
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <ul className={style.product_info_list}>
                            {products.map((product, index)=> {
                                return <ProductInfo key={index} product={product} onSwapProduct={this.onSwapProduct}/>
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