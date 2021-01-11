import React from 'react'
import ReactDOM from 'react-dom'

// class Child extends React.Component{
//     render(){
//         console.log(this.props)
//         return <div>
//             <h1>我是子组件的内容,<br/>姓名{this.props.name}<br/>年龄{this.props.age}</h1>
//         </div>
//     }
// }

function Child(props) {
    console.log(props)
    return <>
        <h2>获取到的姓名是{props.name}</h2>
        <h2>获取到的年龄是{props.age}</h2>
    </>
}


class App extends React.Component{
    state = {
        name: '哈哈',
        age: 33
    }
    render(){
        return<>
            我的内容------
            <Child name='小明' age='11'></Child>
            <Child name={this.state.name} age={this.state.age}></Child>
        </>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))













