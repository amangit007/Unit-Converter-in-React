import React from 'react'
import { useState, useEffect } from 'react'
import "./main.css"
import dataofcurr from './Datacurr';
import country_list from './image';
import currency_names from './CurrencyNames';


export default function Currency() {

    const BASE_URL = 'https://v6.exchangerate-api.com/v6/cef24356452c3a6fb6702fe8/latest/INR';

    const [type1, settype1] = useState('INR')
    const [type2, settype2] = useState('INR')
    const [num1, setnum1] = useState(null)
    const [num2, setnum2] = useState(null)
    const [updown, setupdown] = useState(0)
    const [newvalues, setnewvalues] = useState(dataofcurr)
    const [roundoff, setroundoff] = useState(Number('3'))
    const [image1, setimage1] = useState("IN")
    const [image2, setimage2] = useState("IN")
    const [onoff, setonoff] = useState(false)
    const [curr1, setcurr1] = useState("")
    const [curr2, setcurr2] = useState("")


    var a = [...Object.keys(dataofcurr.conversion_rates)];

    // useEffect(() => {
    //     fetch(BASE_URL)
    //       .then(res => res.json())
    //       .then(data => {


    //         setnewvalues(data)




    //       }).catch((err)=>{

    //           setnewvalues(dataofcurr)

    //       }

    //       )
    //   }, [])




    useEffect(() => {

        setimage1(country_list[type1])
        setimage2(country_list[type2])

        if (currency_names[type1]) {
            setcurr1(`${currency_names[type1]["name_plural"]}` + ` (${currency_names[type1]["symbol_native"]})`)
        }
        else {
            setcurr1(type1)
        }
        if (currency_names[type2]) {
            setcurr2(`${currency_names[type2]["name_plural"]}` + ` (${currency_names[type2]["symbol_native"]})`)
        }
        else {
            setcurr2(type2)
        }

    }, [type1, type2])


    useEffect(() => {

        if (roundoff < 1) {
            setroundoff(Number("1"));
        }

        if (updown === 1) {

            if (type1 === 'INR') {
                let initial = Number(num1) * newvalues.conversion_rates[type2];
                if (String(num1) === "") {
                    setonoff(false)
                    setnum2("")
                }
                else {
                    if (type1 === type2) {
                        setonoff(true)
                        setnum2(Number(num1))
                    }
                    else {
                        setonoff(true)
                        setnum2(initial.toFixed(roundoff))
                    }
                }
            }
            else {
                let initial1 = Number(num1) / newvalues.conversion_rates[type1];
                let initial2 = initial1 * newvalues.conversion_rates[type2];
                if (String(num1) === "") {
                    setonoff(false)
                    setnum2("")
                }
                else {
                    if (type1 === type2) {
                        setonoff(true)
                        setnum2(Number(num1))
                    }
                    else {
                        setonoff(true)
                        setnum2(initial2.toFixed(roundoff))
                    }
                }
            }



        }
        if (updown === 2) {
            if (type2 === 'INR') {
                let initial = Number(num2) * newvalues.conversion_rates[type1];
                if (String(num2) === "") {
                    setonoff(false)
                    setnum1("")
                }
                else {
                    if (type1 === type2) {
                        setonoff(true)
                        setnum1(Number(num2))
                    }
                    else {
                        setonoff(true)
                        setnum1(initial.toFixed(roundoff))
                    }
                }
            }
            else {
                let initial1 = Number(num2) / newvalues.conversion_rates[type2];
                let initial2 = initial1 * newvalues.conversion_rates[type1];
                if (String(num2) === "") {
                    setonoff(false)
                    setnum1("")
                }
                else {
                    if (type1 === type2) {
                        setonoff(true)
                        setnum1(Number(num2))
                    }
                    else {
                        setonoff(true)
                        setnum1(initial2.toFixed(roundoff))
                    }
                }
            }

        }




    }, [num1, num2, type1, type2, roundoff])



    return (
        <div>
        
            <div id="container" style={{ height: "550px", marginTop: "20px"  }}>
                <div style={{ textAlign: "center" }}>
                    <h1>{`Currency`} Converter</h1>
                </div>
                <div className='container' style={{ marginTop: "10px", height: "400px" }}>
                    <i>Data Updated on </i> :
                    <h2>{dataofcurr['time_last_update_utc'].slice(0, -15)}</h2>
                    <div className='row my-4'>
                        <div className="col-1">
                            <img src={`https://www.countryflags.io/${image1}/flat/32.png`} />
                        </div>
                        <div className='col-4'>

                            <select onChange={(e) => settype1(e.target.value)} className='selectbox1'>
                                {

                                    a.map((item) => {

                                        return (
                                            <option Value={`${item}`} Name={`${item}`} >{`${item}`}</option>
                                        )
                                    })}

                            </select>
                        </div>
                        <div className='col-7'>
                            <input type='number' name='inpus' value={num1} onChange={(e) => { setnum1(e.target.value); setupdown(1); }} className='numinput' />
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className="col-1">
                            <img src={`https://www.countryflags.io/${image2}/flat/32.png`} />
                        </div>
                        <div className='col-4'>
                            <select onChange={(e) => settype2(e.target.value)} className='selectbox1'>
                                {

                                    a.map((item) => {

                                        return (
                                            <option Value={`${item}`} Name={`${item}`} >{`${item}`}</option>
                                        )
                                    })}

                            </select>
                        </div>
                        <div className='col-7'>
                            <input type='number' name='inpus' value={num2} onChange={(e) => { setnum2(e.target.value); setupdown(2); }} className='numinput' />
                        </div>
                    </div>
                    <div className='col-12 small text-center'>
                        <b style={{ color: 'red' ,fontSize:'25px'}}>Result </b>
                    </div>
                    {onoff ?
                        <div className='row'>

                            <div className='col-12'>
                                <p>
                                    <i className='currname'>
                                        <b>
                                            {num1}
                                        </b> <i></i>
                                        {curr1}
                                    </i>
                                </p>
                                <p className='text-center' style={{ color: 'blue', paddingLeft: '0px' }}>Equals</p><p><i className='currname'>
                                    <b>
                                        {num2}
                                    </b> <i></i>
                                    {curr2}
                                </i>
                                </p>
                            </div>


                        </div>
                        : <div className="alert alert-danger my-4" role="alert">
                            <strong>Enter Some Value</strong> 
                           
                        </div>}

                    <div className='my-4 text-center'>
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
