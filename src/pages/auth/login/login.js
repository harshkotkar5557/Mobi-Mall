import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import axios from 'axios'

const Login = () => {

    const [userFormData, setUserFormData] = useState({
        email: "",
        password: ""
    })
    const [ errorMsg, setErrorMsg ]= useState('')

    const navigator = useNavigate()
    const { setAuth } = useAuth()

    async function handleFormData(event) {
        event.preventDefault()
        let userInfo = {
            mailId: event.target[0].value,
            password: event.target[1].value
        }
        try {
            let res = await axios.get('https://mobi-mall-api.herokuapp.com/users')

            let user = res.data.filter((user) => user.mailId === userInfo.mailId)
            if (user.length > 0) {
                setAuth(true)
                navigator('/products')
            } else {
                setErrorMsg('something went wrong')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className="middleSection login-middle d-flex align-center justify-center">
        <div className="card login-card">
              <h2 className="text-center fa-2x">Login</h2>
            <form onSubmit={(e)=>handleFormData(e)}>
                <div className="login-input-box m-2rem-t">
                    <label htmlFor="email">Email address</label>
                    <input placeholder="test@gmail.com" id='email' className='text-input' type="email" required/>
                </div>
                <div className="login-input-box">
                    <label htmlFor="password">Password</label>
                    <input placeholder="Test12345" id='password' className='text-input' type="password" required/>
                </div>
                <div className="login-input-box">
                    <label htmlFor="confrinPassword">Confrim password</label>
                    <input placeholder="Test12345" id='confrinPassword' className='text-input' type="password" required/>
                </div>
                  {<p className='error-msg'>{errorMsg}</p>}
                <div className="d-flex p-t-10">
                    <label className="select-input">
                    <input type="checkbox" name="light" 
                    className="checkbox-input" value="" />
                    <span className="text p-l-10">Remember me</span>
                </label>
              
                <span className="p-l-10">Forgot password</span>
                </div>
                <div className="w-full d-flex p-t-15">
                    <button className="btn primary flex-1" type='submit'>Login</button>
                </div>
            </form>
           
            <div className="d-flex align-center justify-around p-t-15" onClick={()=>navigator('/signup')}>
                <span className="text-center cursor-pointer p-t-10" >Create New account <i className="fa fa-arrow-right p-l-5" aria-hidden="true"></i></span>
            </div>
           
        </div>
    </section>
  )
}

export default Login