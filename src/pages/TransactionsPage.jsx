import React, { useContext, useEffect, useState } from 'react'
import { Search } from '../components/Search'
import { TransationForm } from '../components/TransationForm'
import { Transactions } from '../components/Transactions'
import { APIBaseURL } from "../config";
import { Nav } from '../components/Nav';
import { UserContext } from '../user.context';

export const TransactionsPage = () => {

    const [transactions, setTrasactions] = useState([]);
    const [selectedTrans, setSelectedTrans] = useState();
    const [user] = useContext(UserContext);

    useEffect(() => {

        fetch(`${APIBaseURL}/transactions?user_id=${user.id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                setTrasactions(Object.keys(data).length ? data : [])
            })

    }, []);

    function handleSaveTransaction(newTransaction) {

        const transactionIndex = "id" in newTransaction ? transactions.findIndex(tr => tr.id === newTransaction.id) : -1;

        if (transactionIndex === -1) {
            setTrasactions([newTransaction, ...transactions]);
        }
        else {
            transactions.splice(transactionIndex, 1, newTransaction);
            setTrasactions([...transactions])
        }
    }

    function handleDelete(product) {
        const transactionIndex = transactions.findIndex(tr => tr.id === product.id);
        transactions.splice(transactionIndex, 1);
        setTrasactions([...transactions])

    }

    function handleSearch(term) {
        fetch(`${APIBaseURL}/transactions?description_like=${term}&user_id=${user.id}`)
        .then(r=>r.json())
        .then(setTrasactions)
    }

    function handleSort(by, dir = 'asc') {

        const sortFunc = dir == 'asc' ?
            (a, b) => (a[by] < b[by] ? 1 : a[by] > b[by] ? -1 : 0) :
            (a, b) => (a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0);

        transactions.sort(sortFunc);
        console.log(transactions)
        setTrasactions([...transactions]);
    }

    return (
        <div className='h-100 d-flex flex-column gap-3 py-3'>
            <Search onSearch={handleSearch} />
            <TransationForm onSave={handleSaveTransaction} transaction={selectedTrans} />
            <Transactions transactions={transactions}
                onSelect={(tr) => setSelectedTrans({ ...tr })}
                onDelete={handleDelete}
                onSort={handleSort} />
        </div>
    )
}
