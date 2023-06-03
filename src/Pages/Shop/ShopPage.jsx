import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionsPreview from "../../Components/Collection-preview/Collection-preview";


class ShopPage extends React.Component{

    constructor(){
        super();
        this.state={
            collections:SHOP_DATA,
        }
    }

    render(){
        const{collections} = this.state
        return(
            <div className="shop-page">
          {
        collections.map(({id,...OtherCollectionProps})=>{
         return <CollectionsPreview key={id} {...OtherCollectionProps} />
        })
          }
            </div>
        )
    }
}


export default ShopPage;