import React from 'react'
import ReactDOM from 'react-dom'

function Button(props) {
    console.log(props)
    return <>
        <button>默认值</button>
    </>
}

class App extends React.Component{
    click = () => {
        console.log('点击了')
    }
    render(){
        return <div className=''>
            <Button type="primary" onClick={this.click}>你好
            <i>哈哈</i>
            </Button>
        </div>
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))