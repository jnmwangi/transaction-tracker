import React, { useState } from 'react';

export const Transactions = ({ transactions, onSelect, onDelete, onSort }) => {

    const [sortDir, setSortDir] = useState('asc');
    const [sortField, setSortField] = useState();
    function handleSort(by) {
        setSortDir(prev => {
            const dir = prev == 'asc' ? 'desc' : 'asc';
            onSort(by, dir);
            return dir;
        });
        setSortField(by);
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th><a href="#" onClick={() => handleSort("date")} className={ `${sortField === 'date' ? (sortDir === 'asc' ? 'sortDown' : 'sortUp') : ''}` }> Date</a></th>
                    <th><a href="#" onClick={() => handleSort("description")} className={ `${sortField === 'description' ? (sortDir === 'asc' ? 'sortDown' : 'sortUp') : ''}` }>Description</a></th>
                    <th><a href="#" onClick={() => handleSort("category")} className={ `${sortField === 'category' ? (sortDir === 'asc' ? 'sortDown' : 'sortUp') : ''}` }>Category</a></th>
                    <th colSpan={2}><a href="#" onClick={() => handleSort("amount")} className={ `${sortField === 'amount' ? (sortDir === 'asc' ? 'sortDown' : 'sortUp') : ''}` }>Amount</a></th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>
                        <button className='btn btn-sm' onClick={() => onSelect(transaction)}>Edit</button>
                        <button className='btn btn-sm btn-danger' onClick={() => onDelete(transaction)}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}
