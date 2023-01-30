import React, { useState } from 'react'

const CATEGORIES = [
    'Income', 'Food', 'Fashion', 'Gift', 'Transportation', 'Housing'
];

const TransactionForm = ({lastIdx, addTransaction}) => {

  const [ date, setDate] = useState();
  const [ description, setDescription] = useState();
  const [ category, setCategory] = useState();
  const [ amount, setAmount] = useState();

  const newTransaction = () => {
    const transaction = {
        id: lastIdx+1,
        date,
        description,
        category,
        amount
    }
    addTransaction(transaction)
  }

  return (
    <center>
    
        <label>Date</label>
          <input type='date' className='form-control' onChange={(e)=> setDate(e.target.value)}></input>
        <label>description</label>
          <input className='form-control' onChange={(e)=> setDescription(e.target.value)}></input>
        <label>category</label>
        <select class="form-select" aria-label="Select Category" onChange={(e)=> setCategory(e.target.value)}>
            <option value=''>----Select Category---</option>
            {CATEGORIES.map((category, idx) => <option key={idx} value={category}>{category}</option>)}
        </select>
        <label>amount</label>
          <input type='number' className='form-control' onChange={(e)=> setAmount(e.target.value)}></input>
        <button onClick={() => newTransaction()} type="button" class="btn btn-outline-dark"><strong>Update Transaction</strong></button>
    
    </center>
  )
}

export default TransactionForm;
