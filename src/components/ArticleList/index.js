import React, {PureComponent} from 'react'
import Article from '../Article/index'
import './style.css'

export default class ArticleList extends PureComponent {
    state = {
        openArticleId: 1
    }
    render(){
        const elems = this.props.articles.map((article, index) =>
            <li className="article__item" key = {article.id}>
                <Article article = {article}
                         isOpen = {this.state.openArticleId === article.id}
                         onButtonClick = {this.handler.bind(this, article.id)}
                />
            </li>
        )
        return  (
            <ul>
                {elems}
            </ul>
        )
    }

    handler = openArticleId => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }
}