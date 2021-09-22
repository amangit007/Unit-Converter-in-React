import React from 'react'
import { Link } from 'react-router-dom'
import "./Converter.css"

export const Converter = (props) => {
    return (
        <div>


            
                      <Link to={`convertit/${props.type}`} style={{textDecoration:"none"}}><div id="card" className="my-3">
                             {props.type}  Converter
                      
                      </div></Link>
                
               
            
        </div>
    )
}
