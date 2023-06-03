import React from "react";

import './Collection-Preview.scss';
import CollectionItem from "../Collection-item/Collection-item";

const CollectionsPreview = ({title,items})=> {
  return (
            <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index)=>index<4)
                    .map(({id,...OtherItemProps})=> {
                        return <CollectionItem key={id}  { ...OtherItemProps} />
                    }
                    )
                }
                </div>
        
            </div>
  )
       
}

export default CollectionsPreview;