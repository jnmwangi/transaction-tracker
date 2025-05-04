import React, { useContext, useState } from 'react'
import { APIBaseURL } from '../config';
import { UserContext } from '../user.context';
import { Nav } from '../components/Nav';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });

    const [, setUser] = useContext(UserContext);
    const navigate = useNavigate()

    function handleChange(evt) {
        setSignInData({
            ...signInData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        fetch(`${APIBaseURL}/users?email=${signInData.email}&password=${signInData.password}`)
            .then(r => r.json())
            .then((data) => {
                console.log(data)
                if (data.length == 0) {
                    alert("Invalid Credentials")
                }
                else {
                    const user = data[0];
                    setUser(user);
                    sessionStorage.setItem("user", JSON.stringify(user));
                    alert("You have successfully signin");
                    navigate("/tx")

                }
            })
    }

    return (
        <>
            <div className='m-auto'>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Sign In</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="inputEmail3" className="col-form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail3" name='email' value={signInData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="inputPassword3" className="col-form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword3" name='password' value={signInData.password} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <div className=" offset-sm-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
