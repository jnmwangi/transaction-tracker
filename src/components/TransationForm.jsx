import React, { useState } from 'react'

export const TransationForm = ({ onSave }) => {

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

    const [formData, setFormData] = useState({
        id: Math.random().toString(16).substring(2),
        date: (new Date()).toISOString().split("T")[0],
        description: "",
        category: "",
        amount: 0.00
    });

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
        onSave(formData);
    }

    return (
        <form className='d-flex flex-column flex-md-row gap-3 w-100' onSubmit={handleSubmit}>

            <div className="form-group">
                <input type="date" name="date" className="form-control" value={formData.date} onChange={handlesChange} />
            </div>

            <div className="form-group">
                <select name="category" className='form-control' defaultValue={''} onChange={handlesChange}>
                    <option value=""></option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Income">Income</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                </select>
            </div>

            <div className="form-group">
                <input type="text" name="description" className="form-control" value={formData.description} onChange={handlesChange} />
            </div>

            <div className="form-group">
                <input type="number" name="amount" className="form-control" value={formData.amount} onChange={handlesChange} />
            </div>

            <div className="form-group">
                <button type="submit" className='btn btn-primary'>Save Transaction</button>
            </div>


        </form>
    )
}
