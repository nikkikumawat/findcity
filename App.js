import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const [countries, setCountries] = useState([])
    const [selectedcountry, setselectedcountry] = useState('')
    const [state, setstate] = useState([])
    const [selectstate , setselectedstate] = useState('')
    const [cities, setcities] = useState([])
    const [selectcities , setselectedcities] = useState('')


    let API_KEY = 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='


    var config = {
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: {
            'X-CSCAPI-KEY': API_KEY
        }
    };
    var configstate = {
        method: 'get',
        url: `https://api.countrystatecity.in/v1/countries/${selectedcountry}/states`,
        headers: {
            'X-CSCAPI-KEY': API_KEY
        }
    };

    var configcities = {
        method: 'get',
        url: `https://api.countrystatecity.in/v1/countries/${selectedcountry}/states/${selectstate}/cities`,
        headers: {
          'X-CSCAPI-KEY': API_KEY
        }
      };


    useEffect(() => {
        axios(config)
            .then((result) => {
                console.log(result.data)
                setCountries(result.data)
            })
    }, [])

    useEffect(() => {
        axios(configstate)
            .then((result) => {
                console.log(result.data)                    
                setstate(result.data)
            })
    }, [selectedcountry])


    useEffect(() => {
        axios(configcities)
            .then((result) => {
                console.log(result.data)
                setcities(result.data)
            })
    }, [selectstate])

    console.log(selectedcountry)

    return (
        <div className='dropmenu'>

            <select defaultValue='Placeholder' onChange={(e) => { setselectedcountry(e.target.value) }}>
                <option disabled value='Placeholder'>select country</option>
                {
                    countries.map((country, index) => {
                        return (
                            <option value={country.iso2} key={index}>{country.name}</option>

                        )
                    })
                }
            </select>

            <select defaultValue='Placeholder' onChange={(e) => { setselectedstate(e.target.value) }}>
                <option disabled value='Placeholder'>select country</option>
                {
                    state.map((country, index) => {
                        return (
                            <option value={country.iso2} key={index}>{country.name}</option>

                        )
                    })
                    
                }
            </select>


            <select defaultValue='Placeholder' onChange={(e) => { setselectedcities(e.target.value) }}>
                <option disabled value='Placeholder'>select country</option>
                {
                    cities.map((country, index) => {
                        return (
                            <option value={country.iso2} key={index}>{country.name}</option>

                        )
                    })
                    
                }
            </select>
        </div>

    )
}

export default App


