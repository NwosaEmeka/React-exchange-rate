import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Exchange from './Exchange';
import Error from './Error'
import './fetch.css';


function Fetch() {
  const [data, setData] = useState([]);
  const [base, setBase] = useState('MYR');
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  const API_KEY = process.env.REACT_APP_EXCHANGE_API;

  const url = `https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data)
        setIsloading(false)
      })
      .catch(err => {
        console.log(err)
        setError("Something went wrong, we are fixing it...")
        setData([])
        setIsloading(false)
    })
  }, [url, base])

  const updateBase = (newbase) => {
    setBase(newbase)
  }
  // console.log(data.base_code)
  return (
    <div className="main">
      {isloading ?
        <Loading />
        : error ?  
        <Error message={error}/>
        :data ?
        <Exchange 
          data={data}
          base = {base}
          updateBase= {updateBase}
            />
        : null
      }
      
    </div>
  )
}

export default Fetch
