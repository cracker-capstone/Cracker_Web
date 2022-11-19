import React, { Component } from "react"; 
class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log('====>TOC render shouldComponentUpdate',
    newProps.data,
    this.props.data
    );
    if(this.props.data===newProps.data){
      return false;
    }
    return true; //실행하면 이 함수 호출되고 렌더 호출됨
    //false면 이 함수만 호추르 렌더 호출 안 됨
  }
    render(){
      console.log('====>TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          >{data[i].title}</a>
        </li>);
        i = i+1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }
  export default TOC; //외부에서 가져다가 사용 가능