import React from 'react'
import { FaExchangeAlt } from "react-icons/fa";
import CurrencyOptions from './CurrencyOptions';
import './form.css';

function Form({handleInput,handleSubmit,amount,to, from, swap }) {
  return (
    <form className="exchange__form" onSubmit={handleSubmit}>
      <div className="amount_input form__element">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleInput}
        />
      </div>
      <div className="form__input">
        <div className="form__element">
          <label htmlFor="from">From</label>
          <select
            type="text"
            name="from"
            value={from}
            onChange={handleInput}
          >
            <CurrencyOptions />
          </select>
        </div>
        <div>
          <button
            className="swap__btn btn"
            onClick={() => swap(to, from)}>
            <FaExchangeAlt size={30} style={{ fill: 'white' }} />
          </button>
        </div>

        <div className="form__element">
          <label htmlFor="to">To</label>
          <select
            type="text"
            name="to"
            value={to}
            onChange={handleInput}
          >
            <CurrencyOptions />
          </select>
        </div>
      </div>
            
    </form>
  )
}

export default Form
