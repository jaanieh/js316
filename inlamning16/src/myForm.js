import React, { Component } from 'react';

class MyForm extends Component {
    render(){
        return (
        <div>
            <input type="text" className="name" onChange={this.props.saveNameToState} value={this.props.name}/>
            <input type="text" className="email" onChange={this.props.saveEmailToState} value={this.props.email} />
        </div>
        );
    }
        
}

export default MyForm;