import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const [userFormData, setUserFormData] = useState({
        fullName: '',
        email: "",
        password: ""
    })
    const [isShowPassword, setShowPassword] = useState(false)
    const [ errorMsg, setErrorMsg ]= useState('')

    const navigator = useNavigate()


    function compareTwoVal(val1, val2) {
        let isValSame = val1 === val2
        return isValSame
    }

    async function handleFormData(event) {
        event.preventDefault()
        let passValid = checkPasswordComplexity(event.target[2].value.length)
        let isPasswordMatch = compareTwoVal(event.target[2].value, event.target[3].value)
        if (!passValid || !isPasswordMatch) {
            setErrorMsg('something went wrong')
            return;
        }
        let userInfo = {
            firstName:event.target[0].value,
            mailId: event.target[1].value,
            password: event.target[2].value
        }
        console.log(userInfo)
        try {
            let res = await axios.post('https://mobi-mall-api.herokuapp.com/users', userInfo)
            if (res.status===200) {
                navigator('/login')
            } else {
                console.log('error')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    function checkPasswordComplexity(pwd) {
        var regularExpression = /^[a-zA-Z][0-9]$/;
        var valid = regularExpression.test(pwd);
        return valid;
    }

  return (
      <section className="middleSection login-middle d-flex align-center justify-center">
        <div className="card login-card">
              <h2 className="text-center fa-2x">Signup</h2>
              <form onSubmit={(e) => handleFormData(e)}>
            <div className="login-input-box m-2rem-t">
                <label htmlFor="userName">Full name</label>
                <input placeholder="test" id='userName' className='text-input' type="text" required/>
            </div>
            <div className="login-input-box">
                <label htmlFor="email">Email address</label>
                <input placeholder="test@gmail.com" id='email' className='text-input' type="email" required/>
            </div>
       
            <div className="login-input-box position-relative">
                <label htmlFor="password">Password</label>  
                <div className='d-flex'>
                    <input placeholder="Test@123" id='password' className='text-input' type={isShowPassword? "text": 'password'} required />
                    <span className="text p-l-10 cursor-pointer show-pass" onClick={()=> setShowPassword(!isShowPassword)}><i className={`fa ${isShowPassword? "fa-eye-slash": 'fa-eye'}`} aria-hidden="true"></i></span>
                </div>            
            </div>   
            <div className="login-input-box position-relative">
                <label htmlFor="confrinPassword">Confrim password</label>
                <div className='d-flex'>
                    <input placeholder="Test@123" id='confrinPassword' className='text-input' type={isShowPassword? "text": 'password'} required />
                    <span className="text p-l-10 cursor-pointer show-pass" onClick={()=> setShowPassword(!isShowPassword)}><i className={`fa ${isShowPassword? "fa-eye-slash": 'fa-eye'}`} aria-hidden="true"></i></span>
                </div>           
                  </div>     
                  {<p className='error-msg'>{errorMsg}</p>}
            <div className="d-flex p-t-10">
                <label className="select-input">
                    <input type="checkbox" name="light" 
                    className="checkbox-input" value=""/>
                    <span className="text p-l-10">I accept all Terms & conditions</span>
                </label>
            </div>
            <div className="w-full d-flex p-t-15">
                <button  type='submit' className="btn primary flex-1" >Create your account</button>
            </div>
          </form>
            <div className="d-flex align-center justify-around p-t-15" onClick={()=>navigator('/login')}>
                <span className="text-center cursor-pointer p-t-10" >Already have an account <i className="fa fa-arrow-right p-l-5" aria-hidden="true"></i></span>
            </div>
           
        </div>
    </section>
  )
}

export default Signup