import React from "react";
import * as Validator from 'validatorjs'

const Input = ({Label, type, name, onChange}) => {
    return(
        <div>
            <label>{Label}: </label>
            <br/>
            <input type={type} name={name} onChange={e => onChange (e.target.value)}/>
            <br/>
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft:'-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default class TaskValidation extends React.Component {
    state={
        username:'',
        email:'',
        password:'',
        errors:[]
    }
    handleSubmit= event => {
        event.preventDefault();
        const {username, email, password} = this.state;


        let data = { username, email, password };
          
          let rules = {
            username:'required',
            email: 'required|email',
            password: 'min:8|required'
          };

          let validation = new Validator(data, rules);

          if (validation.passes()) {
              alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
              console.log("Registration Data:", { username, email, password });
  
              this.setState({
                  username: '',
                  email: '',
                  password: '',
                  errors: []
              });
          } else {
              this.setState({
                  errors: [
                      ...validation.errors.get('username'),
                      ...validation.errors.get('email'),
                      ...validation.errors.get('password')
                  ]
              });
              console.log("Validation errors:", this.state.errors); // Menampilkan kesalahan di konsol
          }
      }
  
    render() {
        const style = {
            width:'400px',
            margin:'100px auto 0',
            border:'1px solid black',
            padding:'10px'
        }
        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Register Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input Label="Username" type="text" name="username"
                    onChange={value => this.setState({username: value})}/>
                    <Input Label="Email" type="email" name="email" 
                    onChange={value => this.setState({email: value})}/>
                    <Input Label="Password" type="password" name="password" 
                    onChange={value => this.setState({password: value})}/>
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}