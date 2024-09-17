import React ,{useState,useContext} from 'react';
import useContext from '../context/Usercontext';

const [username,setUsername]= userState(''); 
const [password,setPassword]= userState('');
const Login = () => {
    const handleSubmit = ()=>{

    }
  return (
    <div>
    <h2>Login</h2>
    <input type='text' value = {username} onclick = {(e) => setUsername(e.target.value)}   placeholder='Username' />
    <input type="text" value = {password} onclick = {(e) => setPassword(e.target.value)}  placeholder='Password' />
    <button onclick = {handleSubmit}>Sumbit</button>
    </div>
  )
}

export default Login
