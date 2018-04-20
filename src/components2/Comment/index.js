import React, {Component} from 'react'

export default class Comment extends Component {
    render(){
        return (
            <li className="comments__item">
                <h3>
                    {this.props.author}
                    <a href="#">delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>
        )
    }
}