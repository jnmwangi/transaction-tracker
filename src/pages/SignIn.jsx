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

    const [user, setUser] = useContext(UserContext);
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
                    navigate("/transactions")

                }
            })
    }

    return (
        <>
        <Nav />
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" name='email' value={signInData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" name='password' value={signInData.password} onChange={handleChange} />
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </>
    )
}
