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
export default class Validation extends React.Component {
    state={
        email:'',
        password:'',
        errors:[]
    }
    handleSubmit= event => {
        event.preventDefault();
        const {email, password} = this.state;

        // let message = [];


        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(!re.test(String(email).toLowerCase())) {
        //     message = [...message, 'Email tidak valid']
        // }

        // if(email.length === 0) {
        //     message=[...message, 'Email tidak boleh kosong'];
        // }
        // if(password.length === 0 ) {
        //     message=[...message, 'Password tidak boleh kosong'];
        // }

        // if(password.length < 8 ){
        //     message = [...message, 'Password terlalu pendek']
        // }
        // if(message.length){
        //     this.setState ({
        //         errors:message
        //     })
        // } else {
        //     alert(`
        //         email: ${this.state.email}
        //         password: ${this.state.password}
        //         `)
        // }

        let data = { email, password };
          
          let rules = {
            email: 'required|email',
            password: 'min:8|required'
          };

          let validation = new Validator(data, rules);
          validation.passes();

          this.setState ({
            errors:[
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
          })
          
        
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
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input Label="Email" type="email" name="email" 
                    onChange={value => this.setState({email: value})}/>
                    <Input Label="Password" type="password" name="password" 
                    onChange={value => this.setState({password: value})}/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}