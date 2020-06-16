import React from 'react';
import Textinput from '../shared/Textinput';

export default () => {
    return (
        <div className="login">
            <div className="login-form">
                <h1>Welcome</h1>
                <h3>Login to get started</h3>
                <Textinput className="form-group" name="username" label="Username" />
            </div>
        </div>
    )
}

