import React, {PureComponent} from 'react'
//import './Article/style.css'

class Article extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section>{article.article}</section>
        //console.log(body)
        return (
            <div>
                <h2 onClick = {this.incrementCounter}>
                    Article {article.id}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                    <br />
                    clicked: {this.state.count}
                </h2>
                {body}
                <h3>{article.author}</h3>
            </div>
        )
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article