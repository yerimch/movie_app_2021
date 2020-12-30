import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>;
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired
};
//PropTypes를 import하면 propTypes는 걍 PropTypes.propTypes를 안해도 되는건가 그럼 number는 왜?

export default Movie;