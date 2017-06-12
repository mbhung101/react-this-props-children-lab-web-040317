// Code ThemedDecoration Component Here\\

import React, {Component} from 'react'

export default class ThemedDecoration extends Component {

  constructor (){
    super()
  }

  render() {
       const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
         return (
           <div className={this.props.theme}>{child}</div>
         );
       });
       return(
           <div>
               {childrenWithWrapperDiv}
           </div>
       )
   }


}
