import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component{
    constructor(){
        super(props)
        //第一个钩子函数
    }
    static getDerivedStateFromProps(props, state){
        //props 从父组件传进来的数据
        //state是自己的数据
        return {
            qqq:123
        }
    }
    render(){
        return <>
        
        </>
    }
}


class App extends React.Component{
    render(){
        return <div className=''>

        </div>
    }
}