import React from 'react'
import { Button } from 'react-bootstrap';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import '../../page/styles.scss';
import './MovieCard.scss';

function MovieCard(props) {
    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div>
        <a href={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button className='btn btn small'>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </a>
    </div>
  )
}

export default MovieCard