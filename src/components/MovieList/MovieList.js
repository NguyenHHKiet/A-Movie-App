import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';


function MovieList(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

  return (
    <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={30} slidesPerView={3}>
        
            {
                items.map((item, i) => (
                    
                    <SwiperSlide key={i} className='swiper-slide'>
                        <MovieCard item={item} category={props.category}/>
                    </SwiperSlide>
                    
                    
                ))
            }
        
        </Swiper>
    </div>
  )
}

export default MovieList