import React from 'react'
import { Button } from 'react-bootstrap';

import { category, movieType, tvType } from '../api/tmdbApi';
import MovieList from '../components/MovieList/MovieList';
import HeroSlide from '../components/HeroSlide/HeroSlide'
import './styles.scss'

function Home() {
  return (
    <div>
        {/* <HeroSlide/> */}
        <div className="container">
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Trending Movies</h2>
                    <a href="/movie">
                        <Button className="btn btn-outline small">View more</Button>
                    </a>
                </div>
                <MovieList category={category.movie} type={movieType.popular}/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Rated Movies</h2>
                    <a href="/movie">
                        <Button className="btn btn-outline small">View more</Button>
                    </a>
                </div>
                <MovieList category={category.movie} type={movieType.top_rated}/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Trending TV</h2>
                    <a href="/tv">
                        <Button className="btn btn-outline small">View more</Button>
                    </a>
                </div>
                <MovieList category={category.tv} type={tvType.popular}/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Rated TV</h2>
                    <a href="/tv">
                        <Button className="btn btn-outline small">View more</Button>
                    </a>
                </div>
                <MovieList category={category.tv} type={tvType.top_rated}/>
            </div>
        </div>
    </div>
  )
}

export default Home