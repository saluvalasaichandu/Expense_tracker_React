import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [details,setDetails]=useState({fullName:'',photoUrl:''})
    const dataHandler=(e)=>{
        e.preventDefault()
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaXrAG-BuYBtGzAJEOL96RUvdC109qV44',{
        method:'POST',
        body:JSON.stringify({
                ID_TOKEN:localStorage.getItem('login'),
                display_Name:details.fullName,
                photoUrl:details.photoUrl,
                returnSecureToken:true
        }),
        headers: {
            "Content-Type": "application/json",
          }
    })
    .then((res)=>{
        if(res.ok){

        }
        else{
            return res.json().then((data) => {
                console.log(data)
               })
        }
    })
    setDetails({fullName:'',photoUrl:''})
    }
    const nameHandler=(e)=>{
        setDetails({details,['fullName']:e.target.value})
      }
    
    
      const urlHandler=(e)=>{
        setDetails({details,['photoUrl']:e.target.value})
      }
  return (
    <div>
        <div>
            <h1>contact details</h1>
            <form onSubmit={dataHandler}>
                <div>
                <label>Full Name</label>
                <input type="text" placeholder='Full Name' value={details.fullName} required onChange={nameHandler}></input>
                </div>
                <div>
                <label>Photo Url</label>
                <input value={details.photoUrl} required onChange={urlHandler}></input>
                </div>
                <div>
                    <button>Update details</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile