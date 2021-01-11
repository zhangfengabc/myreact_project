import React from 'react'
import ReactDOM from 'react-dom'
import qqq from 'prop-types'

// class Counter extends React.Component{
//     // static propTypes = {

//     // }
//     render(){
//         return<>
//             <h1>当前数字是{this.props.count}</h1>
//         </>
//     }
// }
function Counter(props) {
    return<>
        <h1>当前数字是{props.count}</h1>
        <button onClick={props.onClick.bind(null,100)}>儿子改count</button>
    </>
}
Counter.propTypes = {
    count:qqq.number
}
Counter.defaultProps = {
    count: 200
}


class App extends React.Component{
    state = {
        count: 100
    }
    add =(n)=>{
        this.setState({
            count: this.state.count + n
        })
    }
    render(){
        return <div className=''>
            <Counter count={this.state.count} onClick={this.add}/>
            <button onClick={this.add.bind(this,1)}>+</button>
        </div>
    }
}



ReactDOM.render(<App/>,document.getElementById('root'))