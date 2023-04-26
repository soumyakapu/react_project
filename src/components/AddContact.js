import React, { useState } from "react";
const AddContact =()=>{
    const details={
        id:'',
        name:'',
        email:''
    }
    const[data,setData]=useState([])
    const[user,setUser]=useState(details)
    const nameHandle =(e)=>{
        setUser({...user,name:e.target.value})
    }
    const emailHandler =(e)=>{
        setUser({...user,email:e.target.value})
    }
    const onSubmitHandle =(e)=>{
        e.preventDefault()
        setData([...data,user])
        setUser(details)
    }


    

    return (
        <div>
            <h2>Contcats</h2>
            <hr/>
            <form onSubmit={onSubmitHandle}>
               Name : <input type="text"
                placeholder="enter your name"
                name="name"
                value={user.name}
                onChange={nameHandle}
                /><br/>
               Email : <input type="text"
                placeholder="enter your email"
                name="email"
                value={user.email}
                onChange={emailHandler}
                /><br/>
                <button type="submit" style={{color:'blue'}}>Add</button>
          
            </form>
            <hr/>
            <h2 style={{color:'aqua'}}>USERS</h2>
            {
                data.map((user)=>{
                    const{name,email,id}=user
                    return(
                        <ul style={{color:'navy',widows:'20%',height:'30%'}}>
                            <li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default AddContact