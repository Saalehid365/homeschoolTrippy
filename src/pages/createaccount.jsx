import './createaccount.css'
import backg from "../assest/backg.jpeg";

import React from 'react'


export const Createaccount = () => {
  return (
    <div className='mi-con'>
        <div className='main-con'>
            
        </div>
        <div className='main-in-con'>
                <div className='main-in-left'>
                    <div className='main-left-div'>
                        <h2>More information in less time</h2>
                        <p>Welcome to Home-Ed Trippers this website helps the parents to get all
                            the information of the upcoming trips and likewise it also shows new
                            parents all our previous trips with our little trippers.
                        </p>
                    </div>
                </div>
                <div className='form-right'>
                    <div className='form-title'>
                        <p className='form-title-p'>home-ed Trippy</p>
                        <p className='form-title-p2'> create an account</p>
                    </div> 
                    <form className='create-for formaccount'>
                        <p>Name</p>
                        <input type='text' name='name'></input>
                        <p>Email</p>
                        <input type='email' name='email'></input>
                        <p>Password</p>
                        <input type='text' name='password'></input>
                        <p>password must be atleast 6 characters</p>
                    </form>
                    <div className='orsection'>
                        <div className='lines'></div>
                        <p className='form-title-p2'>or</p>
                        <div className='lines'></div>
                    </div>
                    <div>
                        <button className=' googlesign'>sign in</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
