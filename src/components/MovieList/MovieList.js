import React, { useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import MovieCard from '../MovieCard/MovieCard'

function MovieList(props) {
    const [items, setItems] = useState([])
  return (
    <div>
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default MovieList