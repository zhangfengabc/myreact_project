import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component{
    state = {
        count: 100,
        name: '张三'
    }
    add =(m)=>{
        this.setState({
            count: this.state.count + m
        },function cc(params) {
            console.log(this.state)
        })
    }
    minus(a){
        //第一个参数是传进来的参数1，第二个是当前实例this
        console.log(a)
        this.setState({
            count: this.state.count - a
        })
    }
    render(){
        return <>
            <div>当前数字是{this.state.count},名字是{this.state.name}</div>
            {/* <button onClick={this.add(5)}>+</button> */}
            <button onClick={()=>{this.add(1)}}>+</button>
            <button onClick={this.minus.bind(this,1)}>-</button>
        </>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))



























