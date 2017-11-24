import React from 'react'
import {connect} from 'react-redux'
import "./App.css";
import axios from 'axios'

class AppUI extends React.Component{
  componentDidMount() {
    this.props.getlist();
    this.props.getslider()
  }
  render(){
    var props=this.props
    return (
      <div className="app">
      <h1>skjdfodsgjk</h1>
        <header>
          <ul>
            <li className="l list_1">菜单</li>
            <li className="l list_2">卖座电影</li>
            <li className="l list_3">大连</li>
            <li className="l list_4">我的</li>
          </ul>
        </header>
       
        <div className="slider">
          {
            props.sliderData.map((item,index)=>{
              return (
                <div className="loopslider" key={item.id}>
                  <img src={item.imageUrl}/>
                </div>
              )
                
              
            })
          }
        </div>
        <div className="mai">
          {
            props.listData.map((item,index)=>{
              return (
                <dl key={item.id}>
                  <dt><img src={item.cover.origin}/></dt>
                  <dd>
                    <p>{item.name}</p>
                    <span>{item.intro}</span>
                    <span className="r">{item.grade}</span>
                  </dd>
                </dl>
        
                )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    listData:state.listData,
    sliderData:state.sliderData
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getlist:function(){
      axios.get('/v4/api/film/now-playing?__t=1511487496813&page=1&count=5')
        .then(function(res){
          console.log(res)
          var dd=res.data.data.films
          console.log(dd)
          dispatch({
          type:"FILM",
          payload:dd
        })
      })
      
    },
    getslider:function(){
      axios.get('/v4/api/billboard/home?__t=1511490542325')
      .then(function(res){
          console.log(res)
          dispatch({
            type:"SLIDER",
            payload:res.data.data.billboards
          })
      })
    }

  }
}

const App=connect(mapStateToProps,mapDispatchToProps)(AppUI)
export default App;