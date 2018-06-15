import React, {Component} from 'react'

export default class Comment extends Component {
    constructor(){
        super();
        this.state = {
            visibleComment: true
        }
    }
    render(){
        return (
            <li className="comments__item">
                <h3>
                    {this.props.author}<br />
                    <a onClick={this.hideComment} href="/">delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>
        )
    }
    hideComment = (e) => {
        e.preventDefault();
        this.setState({
            visibleComment: false
        })
    }
}
