import React from 'react'
import ReactDOM from 'react-dom'
import './1.less'
/**
 * jsx
 * 结构中的变量都得用{}包起来
 */
function mymap(ary){
    let t = [];
    for(var i =0;i< ary.length; i++){
        t.push(<li key={i+10}>{ary[i]}</li>)
    }
    return t;
}
var name = '你好'
function List(){
    var obj = {a:12,b:13}
    var h1=<h1>哈哈哈</h1>
    var ary = [1,2,3,4]
    let style1 = {color: 'blue'}
    let col = 'blue'
    return <ul className="box" className={'box ' + name} style={{color:'red'}}>
        {
            ary.map(item => {
                return <li key={item}>{item}</li>
            })
        }
        <li style={style1}>{name}</li>
        <li style={{color: col}}>{obj.a}</li>
        <li>{h1}</li>
        <li>{ary}</li> 
        <li><input type="checkbox" name="" id="qqq"/><label htmlFor="qqq"></label></li>
        <li>{mymap(ary)}</li>
    </ul>
}
ReactDOM.render(<>
  <h2>我的react</h2>
  <List></List>
</>,document.querySelector('#root'))