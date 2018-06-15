import React, {Component} from 'react';
import CommentsList from './CommentsList';
import firebase from 'firebase';
import Rebase from 're-base';

let config = {
    apiKey: 'AIzaSyB9056S8aGHxFdwKzRjC3TIxu-gcrGtcpM',
    databaseURL: 'https://react-963a5.firebaseio.com/'
};
let app = firebase.initializeApp(config);
let base = Rebase.createClass(app.database());

export default class App2 extends Component{
    render(){
        return (
            <div>
                <CommentsList base={base} />
            </div>
        )
    }
}
//ReactMixin(CommentsList.prototype, Rebase);