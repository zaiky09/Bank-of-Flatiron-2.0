import React from 'react'

const TransTable = ({transactions}) => {
  return (
  <table class="table mt-5 th">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">CATEGORY</th>
      <th scope="col">DATE</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody className='th'>
    {transactions.map((transaction) => <tr>
      <td>{transaction.id}</td>
      <td>{transaction.category}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
    </tr>
    )}
    
  </tbody>
</table>
  )
}

export default TransTable;