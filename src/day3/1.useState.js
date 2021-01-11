import React,{useState} from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component{
    state ={
        count: 100
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    minus = ()=> {
        this.setState({
            count: this.state.count -1
        })
    }
    render(){
        return <div className=''>
          <h1>当前数字是{this.state.count}</h1>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
    }
}
function Counter2() {
    // var count = 100;
    // function add(params) {
        
    // }
    // function minus(params) {
        
    // }
    var [count,setCount] = useState(100);
    
    function add() {
        setCount(count+1)
    }
    function minus() {
        setCount(count-1)
    }
    return <>
        <h1>当前数字是{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </>
}
function  Counter3() {
    let [state, setState] = useState({count:100,name:'zz33'})
    function add() {
        setState({
            ...state,
            count: state.count +1
        })
    }
    function minus() {
        setState({
            ...state,
            count: state.count -1
        })
    }
    return <>
        <h1>{state.name}当前数字是{state.count}</h1>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </>
}
ReactDOM.render(<>
    <Counter3/>
    </>,document.getElementById('root'))











