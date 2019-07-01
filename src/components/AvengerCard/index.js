import React from "react";

function AvengerCard(props) {
  return (
      
        <img className="img-thumbnail" alt={props.name} src={props.image} />
      
    );
  }
  
  export default AvengerCard;