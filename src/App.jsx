import { Nav } from "./components/Nav"
import { Search } from "./components/Search"
import { Transactions } from "./components/Transactions"
import { TransationForm } from "./components/TransationForm"
import { transactions as defaultTrasactions } from "./data.json";
import { useState } from "react";


function App() {

  const [transactions, setTrasactions] = useState(defaultTrasactions);

  function handleSaveTransaction(transaction) {
    setTrasactions([transaction, ...transactions])
  }

  return (
    <div className="container h-100 d-flex flex-column gap-3">
      <Nav />
      <Search />
      <TransationForm onSave={handleSaveTransaction} />
      <Transactions transactions={transactions} />
    </div>
  )
}

export default App
