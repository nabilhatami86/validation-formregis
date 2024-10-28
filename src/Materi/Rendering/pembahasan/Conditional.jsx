import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true,
    }
    render(){
        // const isLogin = false;
        // let message = '';
        // if(isLogin){
        //     message = 'You are logged in';
        // } else {
        //     message = 'You are not logged in';
        // }
        setTimeout(() => {
            this.setState({isLoading: false});
        },3000)
        return(
            <div>
                {this.state.isLoading 
                ? <h1>Loading...</h1> 
                : <h1>Selamat datang</h1>
                }
                {/* {isLogin ? <h1> You are logged in</h1> : <h1>You are not logged in</h1>} */}
            </div>
        )
    }
}