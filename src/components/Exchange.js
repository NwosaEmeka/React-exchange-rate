import React, { useState } from 'react';
import Form from './Form';
import './exchange.css';

function Exchange({ data, base, updateBase }){
  const [to, setTo] = useState('USD');
  const [from, setFrom] = useState('MYR');
  const [amount, setAmount] = useState(1);
  
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "amount") setAmount(Math.abs(value));
    if (name === "from") {
      setFrom(value)
      updateBase(value)
    }
    
    if (name === "to") setTo(value)
    
  }
  const swap = (to, from) => {
    setTo(from)
    setFrom(to)
    updateBase(to)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="header">
          <div className="logo">
            <img src="/logo.png" alt="logo"/>
          </div>
      </div>
        <div className="exchange__content">
        <h1 className="header__text">
          Your Trusted Exchange Rate Platform
        </h1>
        <div className="exchange__wrapper">
          <p className="main__para">1 {base} = {data.conversion_rates[to]}{" " + to}</p>

          <Form
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            amount={amount}
            to={to}
            from={from}
            swap={swap}
          />
          <div className="exchange__result">
            <p className="small-text">{amount}{" "}{base} = </p>
            <p className="big-text">{amount * data.conversion_rates[to]} <span className="small-text"> {to}</span> </p>
          </div>

          <p className="date">Last Update: {data.time_last_update_utc}</p>
        </div>
        <p className="disclaimer">The rates contained in this platform is for informational purposes only. For live Currency exchange rate, please visit your bank or authorized dealers.</p>
      </div>
    </div>
  )
}

export default Exchange
