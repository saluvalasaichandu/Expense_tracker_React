import React from 'react'
import { useState } from 'react'
const Login = () => {
const [details,setDetails]=useState({
    email:"",
    password:"",
    confirmPassword:"",
});

const [login,setLogin]=useState();

const submitHandler=(e)=>{
    e.preventDefault();

    if(!login){
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaXrAG-BuYBtGzAJEOL96RUvdC109qV44",{
            method:"POST",
            body:JSON.stringify({
                email:details.email,
                password:details.password,
                returnSecureToken:true
            }),
            headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                return res.json().then((data) => {
                  let err = "login failed";
                  alert(err);
                });
              }
            })
        .then((data)=>{
            console.log(data.idToken);
            alert("login Successful")
        })
        .catch((err) => {
            alert("Authentication failed");
          });
          setDetails({email:"", password:"", confirmPassword:""})
    }

    else{
        if(details.password===details.confirmPassword){
            if(login){
                fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaXrAG-BuYBtGzAJEOL96RUvdC109qV44",{
                    method:"POST",
                    body:JSON.stringify({
                        email: details.email,
                        password: details.password,
                        returnSecureToken: true,
                    }),
                    headers:{
                        "Content-Type": "application/json",
                    }
                }).
                then((res)=>{
                    if(res.ok){
                        alert("signup successful")
                    }
                    else{
                        res.json().then((data) => console.log(data));
                    }
                })
                setDetails({ email: "", password: "", confirmPassword: "" })
                setLogin(true);
            }
            else{
                alert("password is not same in both fields");
            }
        }
    }

};
const emailHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["email"]: e.target.value });
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["password"]: e.target.value });
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["confirmPassword"]: e.target.value });
  };



  return (
    <div className='bg-gray-100 w-1/6'>
         <div className='font-serif text-3xl'>{login ? <h1>Signup</h1> : <h1>Login</h1>}</div>
         <form onSubmit={submitHandler} >
            <div className='font-serif text-base'>
                <label>Email id: </label>
                <input type='email' placeholder='email' value={details.email}
              onChange={emailHandler} required></input>
            </div>

            {!login ?<div>
            <label>Password: </label>
                <input type='password' placeholder='password' value={details.password}
              onChange={passwordHandler} required></input>
            </div>:
            <div className='font-serif text-base'>
                <label>Password</label>
                <input  value={details.password}
              onChange={passwordHandler} placeholder='password'required></input>
            </div>
            }

            {login && (
            <div >
              <label>Confirm Password</label>
              <input type="password" value={details.confirmPassword} onChange={confirmHandler}required placeholder='confirmPassword'></input>
            </div>
          )}

            <div className='font-serif text-2xl'>
                <button> Submit </button>  
            </div>
         </form>

         <div className=' font-serif text-lg'>
         {login && (<button onClick={(e) => {e.preventDefault();setLogin(false); }}>
            already have an account then. Login
          </button>
        )}
            {!login && (<button onClick={(e)=>{e.preventDefault();setLogin(true)}}> Sign up </button>)}
         </div>
    </div>
  )
}
export default Login
