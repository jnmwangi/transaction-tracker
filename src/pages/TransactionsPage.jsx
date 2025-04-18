import React, { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import { TransationForm } from '../components/TransationForm'
import { Transactions } from '../components/Transactions'

export const TransactionsPage = () => {

    const [transactions, setTrasactions] = useState([]);
    const [selectedTrans, setSelectedTrans] = useState();

    useEffect(() => {

        fetch("http://localhost:8080/transactions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                setTrasactions(data)
            })

    }, []);

    function handleSaveTransaction(newTransaction) {

        const transactionIndex = transactions.findIndex(tr => tr.id === newTransaction.id);

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
        // setTra
    }

    function handleSort(by, dir = 'asc') {

        const sortFunc = dir == 'asc' ?
            (a, b) => (a[by] < b[by] ? 1 : a[by] > b[by] ? -1 : 0) :
            (a, b) => (a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0);

        transactions.sort(sortFunc);
        console.log(transactions)
        setTrasactions([...transactions]);
    }

    console.log(selectedTrans)

    return (
        <>
            <Search />
            <TransationForm onSave={handleSaveTransaction} transaction={selectedTrans} />
            <Transactions transactions={transactions}
                onSelect={(tr) => setSelectedTrans({ ...tr })}
                onDelete={handleDelete}
                onSort={handleSort} />
        </>
    )
}
