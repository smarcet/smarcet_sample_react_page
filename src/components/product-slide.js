import React from "react";
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

class ProductSlide extends React.Component {

    constructor(props) {
        super(props);
        this.getImagProductImage = this.getImagProductImage.bind(this);
    }

    getImagProductImage(isMobile = false) {
        let {product} = this.props;
        if (!product) return null;
        return isMobile? `/images/${product.image.mobile}`:`/images/${product.image.desktop}`;
    }

    render() {
        return (
            <div className="col-md-4 col-xs-4">
                <Mobile>
                    <img key={this.props.product.sku} className="product_img" src={this.getImagProductImage(true)}/>
                </Mobile>
                <Desktop>
                    <img key={this.props.product.sku} className="product_img" src={this.getImagProductImage(false)}/>
                </Desktop>
            </div>
        );
    }
}

export default ProductSlide;