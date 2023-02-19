import './createaccount.css'
import React, {useContext, useState} from 'react'
import authContext from '../context/shop-context';
import { FaLockOpen, FaUser } from 'react-icons/fa';


export const Createaccount = () => {

    const [openModal, setOpenModal] = useState(false);
    
    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    

    const {setRegisterPassword,setRegisteremail, register,setLoginEmail, setLoginPassword, login } = useContext(authContext)
  return (
    <div className='mi-con'>
        
        <div className='main-con'>
        </div>
        
        <div className='main-in-con'>
            <div className='main-in-left'>
                <div className='main-left-div'>
                    <h2>More information in less time</h2>
                    <p>Welcome to Home-Ed Trippers this website helps the parents to get all                            the information of the upcoming trips and likewise it also shows new
                            parents all our previous trips with our little trippers.
                    </p>
                </div>
            </div>
            <div className='form-right'>
                <div className='form-title'>
                    <p className='form-title-p'>home-ed Trippy</p>                    
                </div> 
               <form className='signRegForm '>
                    <div>
                        <p className='signinTitle'>Create account</p>
                    </div>                        
                    <div className='formInputs'>
                        <p>Email</p>
                        <input onChange={(e) => setRegisteremail(e.target.value)}></input>
                        <p>Password</p>
                        <input onChange={(e) => setRegisterPassword(e.target.value)}></input>                            
                        
                    </div>
                    <button className='signInBtn confirmBtn' onClick={register}>Sign up</button>     
                        
                </form>
                <div className='oldcustomer'>   
                    <p>Already have an account ?</p>
                    <button className='sign-btn' onClick={toggleModal}>Sign in </button>
                </div>
            </div>
            {openModal && (
                <div className='modalBack'>
                    <div className='signInModal'>
                    <div>
                        <p className='ahlan'>Welcome back</p>
                    </div>                
                    <form className='signinform'>
                        <div className='formInputs'>
                            <p>Email</p>
                            <div className='icon-input'>
                                <FaUser className='inputIcon'/>
                                <input onChange={(e) => setLoginEmail(e.target.value)}></input>
                            </div>
                            <p>Password</p>
                            <div className='icon-input'>         
                                <FaLockOpen className='inputIcon'/>                   
                                <input onChange={(e) => setLoginPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <button className='signInBtn' onClick={login}>Sign in</button>
                    </form>
                    <button onClick={toggleModal} className='closeBtn'>X</button>
                </div>
            </div>
            )}

        </div>
    </div>
  )
}
