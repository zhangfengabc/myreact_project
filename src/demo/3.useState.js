import React,{useState} from 'react'
import ReactDOM from 'react-dom'

function Counter() {
    let [count, setCount] = useState(100)
    function add() {
        setCount(count+1)
    }
    function minus() {
        setCount(count-1)
    }
    return<>
        <h1>当前数字是{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </>
}

function Counter2() {
    let [state, setCount] = useState({
        name: '笑话',
        count: 300
    })
    function add() {
        setCount({...state,count:state.count+1})
    }
    function minus() {
        setCount({...state,count:state.count-1})
    }
    return<>
        <h1>{state.name}当前数字是{state.count}</h1>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </>
}
ReactDOM.render(<Counter2/>,document.getElementById('root'))
















