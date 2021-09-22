import React from 'react'
import { Converter } from './Converter'
import "./Converter.css"
import datas from './data'


export const Menu = () => {
    const b=[
        ...new Set(
            datas.map((e) =>{
                return e.Category;
            }
    
            )
        )
    ]

    
   
    let a = b;
    return (
        <div>
            <div className="container pb-50">
                <div className="container">
                    <div id="cardConatainer">
                        {

                            a.map((item,index) => {

                                return (
                                    <>
                                    {console.log(index)}
                                    <Converter type={item} key={index}/>
                                    </>
                                )
                            })}
                    </div>

                </div>

            </div> 
            <div style={{marginTop:'200px'}}>
                
            </div>

            


        </div>
    )
}

