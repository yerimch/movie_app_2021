import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const LanguageILike = [
  {
    Id:1,
    name : "cplusplus",
    image : "https://www.flaticon.com/svg/static/icons/svg/919/919841.svg",
    rating : 5.0
  },
  {
    Id : 2,
    name : "python",
    image : "https://www.flaticon.com/svg/static/icons/svg/919/919852.svg",
    rating : 4.9
  },
  {
    Id : 3,
    name : "javascript",
    image :"https://www.flaticon.com/svg/static/icons/svg/919/919828.svg",
    rating :  4.8
  }
]

function Languages({name, img, rat})
{
  return (
    <div>
      <h3>I Like {name}</h3>
      <h4>{rat}/5.0</h4>
      <img src={img} alt="이미지 대신 삽입 되는 문구(시각장애인용)" width="150px" height="150px"></img>
    </div>
  );
}

Languages.propTypes={
  name : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  rat : PropTypes.number
};

function App() {
  return (
    <div>{LanguageILike.map(Language=><Languages key={Language.Id} name={Language.name} img={Language.image} rat={Language.rating} />)}</div>
  );
}

export default App;
