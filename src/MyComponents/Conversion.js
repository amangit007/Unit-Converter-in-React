import React from 'react'
import { useState, useEffect } from 'react';
import "./main.css"
import datas from './data';

export const Conversion = (props) => {

    const { Str } = props.match.params;



    const a = datas.filter((e) => {
        return e.Category === Str;
    }

    );




    const all_values = [Object.keys(a[0].Datatypes)];
    const all_units = [Object.values(a[0].Datatypes)];




    const [type1, settype1] = useState(a[0].Standard)
    const [type2, settype2] = useState(a[0].Standard)
    const [num1, setnum1] = useState(null)
    const [num2, setnum2] = useState(null)
    const [unit1, setunit1] = useState(all_units[0])
    const [unit2, setunit2] = useState(all_units[0])
    const [updown, setupdown] = useState(0)
    const [roundoff, setroundoff] = useState(Number('3'))
    const [onoff, setonoff] = useState(false)



    useEffect(() => {
        setunit1(a[0].Datatypes[type1])
        setunit2(a[0].Datatypes[type2])


    }, [type1, type2])

    function tempconvert(type_1,type_2,value){
        if(type_1==='Celsius'){
            if(type_2==='Fahrenheit'){
               return value*1.8 + 32
            }
            if(type_2==='Kelvin'){
                return  value  + 273.15
            }
            if(type_2==='Rankine'){
                return  value * 1.8 + 32 + 459.67
            }
            if(type_2==='Reaumur'){
                return   value * 0.8
            }
        }
        if(type_1==='Fahrenheit'){
            if(type_2==='Celsius'){
                 return ( value - 32) / 1.8
            }
            if(type_2==='Kelvin'){
                return  ( value + 459.67) / 1.8
            }
            if(type_2==='Rankine'){
                return value + 459.67
            }
            if(type_2==='Reaumur'){
                return  ( value - 32) / 2.25
            }
            
        }
        if(type_1==='Kelvin'){
            if(type_2==='Fahrenheit'){
              return  value * 1.8 - 459.67
            }
            if(type_2==='Celsius'){
                return value - 273.15
            }
            if(type_2==='Rankine'){
                return value * 1.8
            }
            if(type_2==='Reaumur'){
                return (value - 273.15) * 0.8
            }
            
        }
        if(type_1==='Rankine'){
            if(type_2==='Fahrenheit'){
               return  value - 459.67
            }
            if(type_2==='Kelvin'){
                return value / 1.8
            }
            if(type_2==='Celsius'){
                return ( value - 32 - 459.67) / 1.8
            }
            if(type_2==='Reaumur'){
                return ( value - 32 - 459.67) / 2.25
            }
        }
        if(type_1==='Reaumur'){
            if(type_2==='Fahrenheit'){
                return value * 2.25 + 32
            }
            if(type_2==='Kelvin'){
                return  value * 1.25 + 273.15
            }
            if(type_2==='Rankine'){
                return value * 2.25 + 32 + 459.67
            }
            if(type_2==='Celsius'){
                return value * 1.25
            }
        }

    }

    useEffect(() => {




        if (roundoff < 1) {
            setroundoff(Number("1"));
        }
        if (roundoff > 20) {
            setroundoff(Number("20"))
        }

        if (updown === 1) {

            if (String(num1) === "") {
                setonoff(false)
                setnum2("")
            }
            else {
                if (Str === 'Temperature') { 
                    if (type1 === type2) {
                        setonoff(true)
                        setnum2(Number(num1))
                    }
                    else {
                        setonoff(true)
                        let final_answer=tempconvert(type1,type2,Number(num1));
                        setnum2(final_answer.toFixed(roundoff))
                    }

                }
                else {
                    let first_concat = type1 + a[0].Standard;
                    let first_data = a[0][first_concat];
                    let first_form = eval(String(parseInt(String(num1))) + String(first_data[0]) + String(first_data[1]));

                    let second_concat = a[0].Standard + type2;
                    let second_data = a[0][second_concat];
                    let second_form = eval(String(first_form) + String(second_data[0]) + String(second_data[1]));


                    if (type1 === type2) {
                        setonoff(true)
                        setnum2(Number(num1))
                    }
                    else {
                        setonoff(true)
                        setnum2(second_form.toFixed(roundoff))
                    }
                }
            }

        }

        if (updown === 2) {


            if (String(num2) === "") {
                setonoff(false)
                setnum1("")
            }
            else {
                if (Str === 'Temperature') { 
                    if (type1 === type2) {
                        setonoff(true)
                        setnum1(Number(num2))
                    }
                    else {
                        setonoff(true)
                        let final_answer=tempconvert(type2,type1,Number(num2));
                        setnum1(final_answer.toFixed(roundoff))
                    }
                }
                else {
                    let first_concat = type2 + a[0].Standard;
                    let first_data = a[0][first_concat];
                    let first_form = eval(String(parseInt(String(num2))) + String(first_data[0]) + String(first_data[1]));

                    let second_concat = a[0].Standard + type1;
                    let second_data = a[0][second_concat];
                    let second_form = eval(String(first_form) + String(second_data[0]) + String(second_data[1]));


                    if (type1 === type2) {
                        setonoff(true)
                        setnum1(Number(num2))
                    }
                    else {
                        setonoff(true)
                        setnum1(second_form.toFixed(roundoff))
                    }
                }
            }



        }

    }, [num1, num2, type1, type2, roundoff])

    return (
        <div>
            <div id="container" style={{ height: '550px', marginTop: "20px" }}>
                <div style={{ textAlign: "center" }}>
                    <h1>{Str} Converter</h1>
                </div>
                <div className='container' style={{ marginTop: "30px" }}>
                    <div className='row'>
                        <div className='col-8'>

                            <select onChange={(e) => settype1(e.target.value)} className='selectbox1' style={{ width: '80%' }} >
                                {

                                    all_values[0].map((item) => {

                                        return (
                                            <option Value={`${item}`} Name={`${item}`} >{`${item}`}</option>
                                        )
                                    })}

                            </select>
                        </div>
                        <div className='col-4'>
                            <i>{unit1}</i>
                        </div>
                        <div className='col-12 my-1' style={{ width: '100%' }}>
                            <input type='number' name='inpus' value={num1} placeholder={type1} className='numinput' style={{ width: '100%' }} onChange={(e) => { setnum1(e.target.value); setupdown(1); }} />
                        </div>
                    </div>
                    <div className='row my-5'>
                        <div className='col-8'>
                            <select onChange={(e) => settype2(e.target.value)} className='selectbox1' style={{ width: '80%' }} >
                                {

                                    all_values[0].map((item) => {

                                        return (
                                            <option Value={`${item}`} Name={`${item}`} >{`${item}`}</option>
                                        )
                                    })}

                            </select>
                        </div>
                        <div className='col-4'>
                            <i>{unit2}</i>
                        </div>
                        <div className='col-12 my-1' >
                            <input type='number' name='inpus' placeholder={type2} value={num2} style={{ width: '100%' }} className='numinput' onChange={(e) => { setnum2(e.target.value); setupdown(2); }} />
                        </div>
                    </div>
                    <div className='col-12 small text-center'>
                        <b style={{ color: 'red', fontSize: '25px' }}>Result </b>
                    </div>
                    {onoff ?
                        <div className='row'>

                            <div className='col-12'>
                                <p>
                                    <i className='currname'>
                                        <b>
                                            {num1}
                                        </b> <i></i>
                                        {type1} ({unit1})
                                    </i>
                                </p>
                                <p className='text-center' style={{ color: 'blue', paddingLeft: '0px' }}>Equals</p>
                                <p>
                                    <i className='currname'>
                                        <b>
                                            {num2}
                                        </b> <i></i>
                                        {type2} ({unit2})
                                    </i>
                                </p>
                            </div>


                        </div>
                        : <div className="alert alert-danger my-4" role="alert">
                            <strong>Enter Some Value</strong>

                        </div>}

                    <div className='text-center'>
                        <i>Round to Decimal Places </i> : <> </>
                        <input type='number' name='rounder' value={roundoff} onChange={(e) => setroundoff(e.target.value)} style={{ width: "80px" }} />
                    </div>
                </div>


            </div>
            <div style={{marginTop:'200px'}}>
            
            </div>


        </div>
    )
}
