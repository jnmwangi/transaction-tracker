import React, { useEffect, useState } from 'react'
// import { UserContext } from './user.context'

const defaultFields = {
    date: (new Date()).toISOString().split("T")[0],
    description: "",
    category: "",
    amount: 0.00
}

export const TransationForm = ({ transaction, onSave }) => {

    /* const [date, setDate] = useState((new Date()).toISOString().split("T")[0]);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0.00);

    function handleDateChange(evt) {
        setDate(evt.target.value)
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value)
    }

    function handleCategoryChange(evt) {
        setCategory(evt.target.value)
    }

    function handleChangeAmount(evt){
        setAmount(evt.target.value)
    } */

    // const [user] = useContext(userContext)

    const [formData, setFormData] = useState(defaultFields);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFormData(transaction || defaultFields)
    }, [transaction])

    function handlesChange(evt) {

        const fieldName = evt.target.name;
        const fieldValue = evt.target.value

        setFormData({
            ...formData,
            [fieldName]: fieldValue
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        setLoading(true);

        fetch("http://localhost:8080/transactions", {
            method: transaction.id ? "PATCH" : "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response=>response.json())
        .then(data=>{
            onSave(data);
            setLoading(false)
        })

        
        setFormData(defaultFields)
    }

    return (
        <form className='d-flex flex-column flex-md-row gap-3 w-100' onSubmit={handleSubmit}>

            <div className="form-group flex-fill">
                <input type="date" name="date" className="form-control" required value={formData.date} onChange={handlesChange} />
            </div>

            <div className="form-group flex-fill">
                <select name="category" className='form-control' required value={formData.category} onChange={handlesChange}>
                    <option value=""></option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Income">Income</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                </select>
            </div>

            <div className="form-group flex-fill">
                <input type="text" name="description" className="form-control" required value={formData.description} onChange={handlesChange} />
            </div>

            <div className="form-group flex-fill">
                <input type="number" name="amount" className="form-control" required value={formData.amount} onChange={handlesChange} />
            </div>

            <div className="form-group d-flex gap-3">
                <button type="submit" disabled={loading} className='btn btn-primary'>{ loading ? 'Wait...' : 'Save Transaction' }</button>
                <button type='button' className='btn btn-outline-primary' onClick={() => setFormData(defaultFields)}>Clear</button>
            </div>


        </form>
    )
}
