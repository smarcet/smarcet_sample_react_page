import React from "react";
import style from "../styles/product-info.module.less";

class ProductInfo extends React.Component {

    constructor(props){
        super(props);
        this.formatPrice = this.formatPrice.bind(this);
        this.onSwapProduct = this.onSwapProduct.bind(this);
    }

    formatPrice(intPrice){
        return `$  ${parseFloat(intPrice).toFixed( 2 )}`;
    }

    onSwapProduct(ev){
        this.props.onSwapProduct(ev, this.props.product);
    }

    render(){
        let {product} = this.props;
        return(
            <li>
                <div className={style.product_info_container}>
                    <p className={style.product_name}>{product.name}</p>
                    <hr className={style.title_overflow}/>
                    <div className={`row ${style.product_info_row}`}>
                        <div className="col-md-6 col-xs-12">
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Region:&nbsp;</span><span className={style.list_non_bold}>{product.origin}</span>
                                </div>
                            </div>
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Awards:&nbsp;</span><span className={style.list_non_bold}>{product.awards}</span>
                                </div>
                            </div>
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Wine Notes:&nbsp;</span><span className={style.list_non_bold}>{product.tag_line}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Retail Price:&nbsp;</span><span className={style.retail_price}>{this.formatPrice(product.price)}</span>
                                </div>
                            </div>
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Club Price:&nbsp;</span><span className={style.club_price}>{this.formatPrice(product.club_price)}</span>
                                </div>
                            </div>
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <span className={style.list_bold}>Intro Price:&nbsp;</span><span className={style.intro_price}>{this.formatPrice(product.intro_price)}</span>
                                </div>
                            </div>
                            <div className={`row ${style.product_info_row_item}`}>
                                <div className="col-md-12 col-xs-12">
                                    <button type="button" className={style.swap_button} onClick={this.onSwapProduct}>
                                        <img/> swap this bottle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ProductInfo;