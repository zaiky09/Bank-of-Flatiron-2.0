import { useEffect, useState } from 'react';
import TransTable from './components/transTable';
import TransactionForm from './components/TransactionForm';
import { BASE_URL } from './Consts';
import "./App.css"


function App() {
  const [ transactions, setTransactions ] = useState([])
  const [ filteredTransactions, setFieldTransactions ] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTransactions(data);
        setFieldTransactions(data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const filterRecord = (searchText) => {
    console.log(searchText);
    const filterdArr = transactions.filter(transaction => (transaction.description.toLowerCase()).includes(searchText.toLowerCase()))
    setFieldTransactions(filterdArr);
  }

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
    setFieldTransactions([...filteredTransactions, transaction])
  }

  return (
    <div className="App">
      <header className="header">
        <h1>BANK OF FLATIRON</h1>
        <h5 id="tt"><em>TRANSACTIONS</em></h5>
      </header>
      <div className='row m-4'>
        <center>
        <div className='col-8'>
          <input className='searching' onChange={(e) => filterRecord(e.target.value)} placeholder="Search for Transactions"></input>
          <button type='submit' class="btn btn-outline-dark ms-2">Search</button>
          <div className='col-4 tb mt-4'>
          <TransactionForm lastIdx={transactions.length} addTransaction={addTransaction}/>
        </div>
          <TransTable transactions={filteredTransactions}/>
        </div>
        </center>

      </div>
    </div>
  );
}

export default App;
