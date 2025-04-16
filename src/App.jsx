import { useState } from "react";
import { Nav } from "./components/Nav"
import { Search } from "./components/Search"
import { Transactions } from "./components/Transactions"
import { TransationForm } from "./components/TransationForm"
import UserContextProvider from "./components/user.context";
import { transactions as defaultTrasactions } from "./data.json";


function App() {

  const [transactions, setTrasactions] = useState(defaultTrasactions);
  const [selectedTrans, setSelectedTrans] = useState();

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
    <div className={`container h-100 d-flex flex-column gap-3`}>
      <Nav />
      <Search />
      <TransationForm onSave={handleSaveTransaction} transaction={selectedTrans} />
      <Transactions transactions={transactions}
        onSelect={(tr) => setSelectedTrans({ ...tr })}
        onDelete={handleDelete}
        onSort={handleSort} />
    </div>
  )
}

export default App
