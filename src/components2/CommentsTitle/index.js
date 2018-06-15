import React, {Component} from 'react'


export default class CommentsTitle extends Component{
    getCommentsQuantity(q){
        if(q === 0){
            return 'No comments'
        }
        else if(q === 1){
            return '1 comment'
        }
        else {
            return q + ' comments'
        }
    }
    render(){
        return (
            <h5 className="comments__title">
                {this.getCommentsQuantity(this.props.quantity)}
            </h5>
        )
    }
}