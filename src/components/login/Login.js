import React from 'react';
import Textinput from '../shared/Textinput';

export default () => {
    return (
        <div className="login">
            <nav>
                <img className="mx-auto" src="/images/logo.svg" alt=""/>
            </nav>
            <div className="login-form">
                <div>
                    <h1 className="cl-white text-center">Welcome</h1>
                    <h3 className="cl-white text-center">Login to get started</h3>
                    <Textinput className="form-group" name="username" label="Username" />
                    <Textinput className="form-group" name="password" label="Password" />
                    <div className="my-3 d-flex"><a className="cl-white ml-auto" href="#">Forgot Password?</a></div>
                    <a href="#" className="btn btn-primary mx-auto">Login</a>
                </div>
            </div>
        </div>
    )
}

