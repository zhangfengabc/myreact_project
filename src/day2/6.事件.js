import React from 'react';
import ReactDOM from 'react-dom';

console.log(React.Component)//react的内置类
class App extends React.Component{
    state = {
        count: 100
    }
    add(){
        console.log(this)
        this.setState({
            //setState是一个异步操作
            count: ++ this.state.count
        })
    }
    minus(){
        this.setState({
            count: --this.state.count
        })
    }
    add2 = () => {
        // this.setState({
        //     count: ++ this.state.count
        // })
        this.setState({
            count: this.state.count + 1
        },function(){
            console.log(this.state.count)
        })
    }
    
    render(){
        return <div className=''>
            <button onClick={this.add.bind(this)}>+</button>
            <button onClick={()=> {this.minus()}}>-</button>
            <h1>{this.state.count}</h1>
        </div>
    }
}
ReactDOM.render(<App qqq={123} className='box'/>,document.getElementById('root'))