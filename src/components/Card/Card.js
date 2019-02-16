import React from 'react'; 
import './Card.css';


function Card (props){
    return(
    <div className="card"> 
   
    <img onClick={()=> props.handleClick(props.id)}  src={props.img}/>
    </div>
    )
}



export default Card;