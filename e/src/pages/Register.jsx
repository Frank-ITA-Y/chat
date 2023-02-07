import React from 'react'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder="diplay name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="file" />
                    <button>Sing up</button>
                </form>
                <p>You do have account? Login</p>
            </div>
        </div>

    )
}

export default Register
