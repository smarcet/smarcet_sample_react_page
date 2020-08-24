import React from 'react';
import style from "../styles/long-text.module.less";

class LongText extends React.Component {

    constructor(props){
        super(props);
        this.unveil = this.unveil.bind(this);
        this.state ={
            unveil:false
        }
    }

    unveil(ev){
        ev.preventDefault();
        this.setState({...this.state, unveil: true});
        return false;
    }

    render(){
        let {value,maxSize} = this.props;
        let {unveil} = this.state;
        let newValue = value;
        let readMore = false;
        if(value.length > maxSize) {
            newValue = value.substring(0, maxSize - 1) + "... ";
            readMore = true;
        }
        if(unveil)
            return <span>{value}</span>;
        return <span>{newValue}{readMore && <a href="#" onClick={this.unveil} className={style.read_more_link}>Read more ></a> }</span>;
    }
}

export default LongText;