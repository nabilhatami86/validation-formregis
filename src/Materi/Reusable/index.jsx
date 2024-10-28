import React from "react";

import Product from "./Product";


export default class Reusable extends React.Component {

    state ={
        Value:0
    }

    handleValue =(data)=> {
        this.setState({
            value:data
        });
        
    }

    render (){
        return (
            <div>
                
                <Product receiveValue={this.handleValue}/>
            </div>
        )
    }
}