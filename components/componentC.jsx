import React, { Component } from 'react';
//import {bindActionreators} from 'redux';
import {connect} from 'react-redux';

class ComponentC extends Component {
    //state = {  }
    render() { 
        return (
        <h1>{this.props.data}</h1>
          );
    }
}
 
function mapStateToProps(state){
    //console.log('component c:',state);
    return {
        data: state
    };
    
}

export default connect(mapStateToProps)(ComponentC);