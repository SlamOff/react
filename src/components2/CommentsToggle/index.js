import React, {Component} from 'react';

export default class CommentsToggle extends Component{


    render(){
        return (
            <button onClick={this.props.toggle} className="btn_hide">{this.props.isShow ? 'Hide comments' : 'Show comments'}</button>
        )
    }
}