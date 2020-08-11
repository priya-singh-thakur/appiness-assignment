import React from 'react';
import { connect } from 'react-redux';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      data: this.props.loginData,
      errors :  {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  validate(){
    let {email,password, data} = this.state
    let errors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email";
    } else if (!this.validateEmail(email)){
      formIsValid = false;
      errors["email"] = "*Incorrect Email Id";
    } else if(email!==data.email){
      formIsValid = false;
      errors["email"] = "*User does not exist";
    }
    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password";
    }
    else if(password!==data.password){
      formIsValid = false;
      errors["password"] = "*User does not exist";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  handleSubmit(e) {
    e.preventDefault();
    if(this.validate()){
    this.props.history.push('/dashboard')
    alert("Logged in Successfully")
   }
  }

  handleCancel(e) {
    this.setState({
     ...this.state,
     email:'',
     password:''
    })
  }
  render() {
    return (
      <div className="w3-container w3-card-2" style={{ width: "50%", margin: "auto", marginTop: "100px" }}>
        <form>
        <h2 className="w3-text-blue w3-center">Login Application</h2>
           <label className="w3-left">Email : </label>
               <input className="w3-input" type="text" onChange={this.handleChange} name='email' />
             <label className = "w3-text-red">{this.state.errors.email}</label><br />

             <label className="w3-left">Password : </label>
                <input className="w3-input" type="password" onChange={this.handleChange} name='password' />
             <label className = "w3-text-red">{this.state.errors.password}</label><br />

             <button className="w3-btn w3-green w3-margin-bottom w3-margin-top"onClick={(e)=>this.handleSubmit(e)}>Submit</button>
             <button className="w3-btn w3-red w3-margin-bottom w3-margin-top w3-right"onClick={(e)=>this.handleCancel(e)}>Cancel</button>
             
        </form>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    loginData: state.loginReducer
  }
}
export default connect(mapStateToProps)(Login);


