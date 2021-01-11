import React from 'react'
import ReactDOM from 'react-dom'

function Child() {
    return <>
        <h1>儿子组件</h1>
    </>
}


class App extends React.Component{
    fn=()=>{
        console.log(this)
    }
    render(){
        return <div className=''>
            <Child/>
            <p ref='p'>哈哈</p>
            <button onClick={this.fn}>获取</button>
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))