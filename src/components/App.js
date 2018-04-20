import React, {PureComponent} from 'react'
import ArticleList from './ArticleList/index'
import articles from '../data'


class App extends PureComponent{
    state = {
        reverted: false
    }
    render(){
        return (
            <div>
                <h1>Articles</h1>
                <button onClick = {this.revert} >Revert</button>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}
export default App