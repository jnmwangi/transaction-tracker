import React from 'react';

export const Transactions = ( { transactions } ) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th colSpan={2}>Amount</th>
                </tr>
            </thead>
            <tbody>
                { transactions.map( transaction => <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>
                        <button className='btn btn-sm'>Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr> ) }
            </tbody>
        </table>
    )
}
