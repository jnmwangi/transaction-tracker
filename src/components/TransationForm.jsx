import React, { useContext, useEffect, useState } from 'react'
// import { UserContext } from './user.context'
import { APIBaseURL } from "../config";
import { UserContext } from '../user.context';

const defaultFields = {
    date: (new Date()).toISOString().split("T")[0],
    description: "",
    category: "",
    amount: 0.00
}

export const TransationForm = ({ transaction, onSave }) => {

    const [formData, setFormData] = useState(defaultFields);
    const [loading, setLoading] = useState(false);
    const [user] = useContext(UserContext);

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
        console.log(user)

        fetch(`${APIBaseURL}/transactions${transaction && "id" in transaction ? '/'+transaction.id : ''}`, {
            method: transaction && "id" in transaction ? "PATCH" : "POST",
            body: JSON.stringify({ ...formData, user_id: user.id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                onSave(data);
                setLoading(false)
            })


        setFormData(defaultFields)
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add/Edit Transaction</h5>
                <form className='d-flex flex-column flex-md-row gap-3 w-100' onSubmit={handleSubmit}>

                    <div className="form-group flex-fill">
                        <input type="date" name="date" className="form-control" required placeholder='Date' value={formData.date} onChange={handlesChange} />
                    </div>

                    <div className="form-group flex-fill">
                        <select name="category" className='form-control' required value={formData.category} onChange={handlesChange}>
                            <option value="">Select Category</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Income">Income</option>
                            <option value="Food">Food</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                    </div>

                    <div className="form-group flex-fill">
                        <input type="text" name="description" placeholder='Description' className="form-control" required value={formData.description} onChange={handlesChange} />
                    </div>

                    <div className="form-group flex-fill">
                        <input type="number" name="amount" placeholder='Amount' className="form-control" required value={formData.amount} onChange={handlesChange} />
                    </div>

                    <div className="form-group d-flex gap-3">
                        <button type="submit" disabled={loading} className='btn btn-primary text-nowrap'>{loading ? 'Wait...' : <i className='bi bi-floppy' />}</button>
                        <button type='button' className='btn btn-outline-primary' onClick={() => setFormData(defaultFields)}><i className='i.bi bi-x' /></button>
                    </div>


                </form>
            </div>
        </div>
    )
}
