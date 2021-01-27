import React,{useState} from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import Header from "../SharedComponents/Header"
import { connect } from 'react-redux'
import { login } from '../../Redux/User/userActions'
const Login = ({login})=>{
    const [data,setdata]=useState({
        email:'',
        password:''
    })
    const {email,password} = data
    const onChange = e =>setdata({...data,[e.target.name]:e.target.value});
    const onSubmit = e =>{
        e.preventDefault()
        login(email,password);
    }

    
        return (
            <>
                      <div id="signin" className="col-sm-4 left form-group">
                      <form onSubmit = {e=> onSubmit(e)}>
                            <input type="email" className="form-control inputhover" name="email" placeholder="Email" onChange={e=>onChange(e)} required />
                            <input type="password" className="form-control inputhover" name="password" placeholder="Password" onChange={e=>onChange(e)} required minLength='8' />
                            <input type='button' value='Signin' onClick={e=>onSubmit(e)} className="btn btn-secondary" style={{ "display": 'inline-block', "marginRight": '10px' }}></input>
                            </form>
                            </div>

            </>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (email,password) => dispatch(login(email,password)),
    }
  }
export default connect(null,mapDispatchToProps)(Login)