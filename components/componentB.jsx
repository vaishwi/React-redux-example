import React, { Component } from 'react';

// installation of material ui npm install @material-ui/core
import TextField from '@material-ui/core/TextField';

//import TextField from '@material-ui/core/TextField';
// or
//import { TextField } from '@material-ui/core';

import {textEnter} from '../actions/index';

import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';

class ComponentB extends Component {
    state = {
        textFieldValue:''
      }
        
      someHandlerFunction = valuetext =>{
        this.setState({
            textFieldValue: valuetext
        });
        console.log(valuetext);
    }
    
    render() { 
        

        return (
        <TextField id="standard-basic" label="Enter text" ref="myField" onChange={(event) => this.props.textEnter(event.target.value)}/>
          );
    }

}
 
function matchDispatchToProps(dispatch){
    
    return bindActionCreators({textEnter: textEnter}, dispatch)
}



export default connect(null, matchDispatchToProps)(ComponentB);