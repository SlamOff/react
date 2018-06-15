import React, {Component} from 'react';
import './App.css';
// const ReactLaunch = ({ name}) => {
//     return (
//         <div>
//             <h2>{name}</h2>
//         </div>
//     )
// }

class App3 extends Component{
    constructor(){
        super();
        this.state = {
            value: '',
            offset: 0,
            launches: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        });
    };
    handleClick(){
        this.setState({
            value: ''
        });
    };
    // listOfLaunches(launches){
    //     console.log(launches);
    //     launches.map((el) => {
    //         console.log();
    //         return (
    //             <li key={el.id}>{el.name}</li>
    //         )
    //     });
    // }
    componentDidMount(){
        let xhr = new XMLHttpRequest();
        let offset = 0;
        let url = 'https://launchlibrary.net/1.3/launch/next/10?offset=' + this.state.offset;
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                console.log('Ошибка. Данные с сервера не получены.');
            }
            else {
                this.setState({
                    launches: JSON.parse(xhr.responseText).launches
                });
            }
        }.bind(this);
    };
    renderButton(){
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    };

    render(){
        const { value, launches } = this.state;
        console.log(launches);
        return (
            <div className="container rocket">
                <h1>Hello</h1>
                <p>{value}</p>
                <input type="text" name="value" value={value} onChange={this.handleChange} />
                {this.renderButton()}
                <ul className="rocket__list">
                    {
                        launches.map((el) => {
                            return (
                                <li className="rocket__item" key={el.id}>
                                    <h6 className="rocket__item__title">{el.name}</h6><br/>
                                    <img className="rocket__item__pict" src={el.rocket.imageURL} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default App3;