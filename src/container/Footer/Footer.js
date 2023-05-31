import React from "react";
import './Footer.css'

class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            year: new Date().getFullYear()
        }
    }
    render(){
    return(
        <div className="footer">
            <div className="slogan">
                 <p>{this.state.year} shopping!!!! made with honour </p>
            </div>
        </div>
    )
}
}

export default Footer;

