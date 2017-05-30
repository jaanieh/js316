import React, { Component } from 'react';

class MyForm extends Component {
    render(){
        return (
        <div>
            <input type="text" className="name"  />
            <input type="text" className="email" />
        </div>
        );
    }
}

export default MyForm;