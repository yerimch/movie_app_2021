import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/> 
      <Route path="/movie/:id" component={Detail}/> 
    </HashRouter>
  )
}
export default App

/*
<Route path="/" component={Home}/>
<Route path="/about" component={About}/> 
이런식이면 about에서 home도 겹쳐서 나온다. 왜냐면 url이 겹치니까.. 다른 부분도 같음 "/"자체를 router로 인식하는 것
/AA/BBB , /AA라면 겹쳐서 출력 react js router는 url을 가져오고 비교 후 match되면 보여줌 -> n개의 router(component)가 rendering됨
exact={true}조건 시 모든 url이 router와 일치해야 렌더링함

html은 page를 refresh한다.->react js die
=> interaction하지만 react가 죽지는 않는것 link
html의 <a href="/"> 대신 <Link to="/">사용
Link는 router안에서만 사용 되어야 한다!!!!!!!

<HashRouter>가 아닌 <BrowserRouter> 사용시 /#머시기 없음 but github pages 적용 좀 힘듦

react js에서 component가 여러 개일 경우 <> </>로 감싸줘야 한다. <footer>도 component
모든 component는 props가 있음.

"/movie/:id" :이 변수 사용한다는 것을 알림
*/
