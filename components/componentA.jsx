// import shortcut imrc
import React, { Component } from 'react';
import ComponentC from './componentC';
import ComponentB from './componentB';
//shortcut cc
class ComponentA extends Component {
    //state = {  }
    render() { 
        return ( 
            <div>
                <ComponentB />
                <ComponentC />
                
            </div>
            
         );
    }
}
 
export default ComponentA;