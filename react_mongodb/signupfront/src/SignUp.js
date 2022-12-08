import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fullName:'',
         username:'',
         email:'',
         password:''

      }
      this.changeFullName=this.changeFullName.bind(this);
      this.changeUsername=this.changeUsername.bind(this);
      this.changeEmail=this.changeEmail.bind(this);
      this.changePassword=this.changePassword.bind(this);
    }

    formSubmit = (e) => {
        e.preventDefault();

        const registered = {
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

           // window.location='/'

           this.setState({
                fullName:'',
                username:'',
                email:'',
                password:''
           })
    }

    changeFullName =(e)=>{
        this.setState({
            fullName:e.target.value
        })
    }
    changeUsername =(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changeEmail =(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    changePassword =(e)=>{
        this.setState({
            password:e.target.value
        })
    }


    
  render() {
    return (
      <div>
        <div className='container'>
            <div className='form-div'>
             <form onSubmit={this.formSubmit}> 
                <input 
                    className='form-control form-group'
                    type='text'
                    placeholder='Full Name'
                    onChange={this.changeFullName}
                    value={this.state.fullName}
                />
                <input 
                    className='form-control form-group'
                    type='text'
                    placeholder='Username'
                    onChange={this.changeUsername}
                    value={this.state.username}
                />
                    <input 
                    className='form-control form-group'
                    type='email'
                    placeholder='E-mail'
                    onChange={this.changeEmail}
                    value={this.state.email}
                />
                    <input 
                    className='form-control form-group'
                    type='password'
                    placeholder='Password'
                    onChange={this.changePassword}
                    value={this.state.password}
                />
                <input type='submit' className='btn btn-danger btn-block form-control' value='submit' />
                </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp



