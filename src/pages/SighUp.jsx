import React, { useState } from 'react'
import { APIBaseURL } from "../config";
import { Nav } from '../components/Nav';

export const SighUp = () => {

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handlesChange(evt) {
        setSignUpData({
            ...signUpData,
            [evt.target.name]: evt.target.value
        });
    }

    function submitHandler(evt) {
        evt.preventDefault();

        fetch(`${APIBaseURL}/users`, {
            method: 'POST',
            body: JSON.stringify(signUpData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

    }

    return (
        <div className="m-auto mw-50">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Sign Up</h3>

                    <form className="row g-3" onSubmit={submitHandler}>
                        <div className="col-12">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={signUpData.name} onChange={handlesChange} className='form-control' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="inputEmail4" value={signUpData.email} onChange={handlesChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="inputPassword4" value={signUpData.password} onChange={handlesChange} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
