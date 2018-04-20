import React, {Component} from 'react'
import Comment from '../Comment'
import CommentsTitle from '../CommentsTitle'


export default class CommentsList extends Component{
    render(){
        const comments = [
            {
                name: 'Alex',
                text: 'Hello, I\'m Alex'
            },
            {
                name: 'Eugene',
                text: " My name is Zhenya"
            },
            {
                name: 'Vetal',
                text: " Vitalka ia nah!!1"
            }
        ];
        return (
            <div className="comments">
                <CommentsTitle />
                <button className="btn_hide">Hide comment</button>
                <ul className="comments__list">
                    {
                        comments.map((comment, index) => {
                            return <Comment key = {index} author={comment.name} text = {comment.text} />
                        })
                    }
                </ul>
            </div>
        )
    }
}