import React from"react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;
        if(location.state==undefined){
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        return( 
        <div>
            {location.state.title}   
        </div>)
    }
}
export default Detail

/*
movie detail에 클릭해서 접근하지 않을 경우 home으로 redirecting
detail 출력 시에도 address로 접근시error 발생 <- render가 먼저 실행 되기 때문
solve
1. just check if(location.state)
router들이 가진 props를 활용해 screen 사이에서 정보 전달
*/