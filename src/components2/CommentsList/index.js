import React, {Component} from 'react';
import Comment from '../Comment';
import CommentsTitle from '../CommentsTitle';
import CommentsToggle from '../CommentsToggle';
import ReactMixin from 'react-mixin';
//import ReactFireMixin from 'reactfire';
import Rebase from 're-base';
//import firebase from 'firebase';


export default class CommentsList extends Component{
    constructor(){
        super();
        this.state = {
            showComments: true,
            comments: [ {
                        name: 'Alex',
                        text: 'Hello, I\'m Alex'
                    },
                    {
                        name: 'Eugene',
                        text: " My name is Zhenya"
                    },
                    {
                        name: 'Vetal',
                        text: " Vetal is my name"
                    }]
        }
    }
    componentDidMount(){
        this.props.base.syncState('CommentsList', {
            context: this,
            state: 'comments',
            asArray: true
        });
    }
    toggleComments = () =>  {
        this.setState({
            showComments: !this.state.showComments
        })
    };
    render(){
        // const comments = [
        //     {
        //         name: 'Alex',
        //         text: 'Hello, I\'m Alex'
        //     },
        //     {
        //         name: 'Eugene',
        //         text: " My name is Zhenya"
        //     },
        //     {
        //         name: 'Vetal',
        //         text: " Vetal is my name"
        //     }
        // ];
        let comments = this.state.comments;
        let commentsList;
        if(comments.length > 0 && this.state.showComments){
            commentsList = <ul className="comments__list">
                {
                    this.state.comments.map((comment, index) => {
                        return <Comment key = {index} author={comment.name} text = {comment.text} />
                    })
                }
            </ul>
        }
        return (
            <div className="comments">
                <CommentsTitle quantity={comments.length} />
                <CommentsToggle toggle={this.toggleComments} isShow={this.state.showComments} />
                {commentsList}
            </div>
        )
    }
}
ReactMixin(CommentsList.prototype, Rebase);