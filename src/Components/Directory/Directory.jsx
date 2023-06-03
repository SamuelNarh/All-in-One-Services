import React from "react";
import './directory.styles.scss'
import { sections } from "./072 directory.data";
import MenuItems from "../menu-items/menu-items";

class Directory extends React.Component{

    constructor(){
        super();
        this.state={
            sections:sections
        }
    }


    render(){

        // I destructure the sections to ({title,imageUrl,id})
        //  title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} ===...others

        return(
            <div className="homepage">
            <div className="directory-menu">
            {
               this.state.sections.map(({id ,...otherSectionProps}) => {
              return  <MenuItems key={id} {...otherSectionProps}/> 
               })
            }
            
            </div>
        </div>
            
        )
    }

}


export default Directory;