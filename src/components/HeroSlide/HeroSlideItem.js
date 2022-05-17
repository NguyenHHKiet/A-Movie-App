import React from 'react'
import { Button } from 'react-bootstrap';
import { unstable_HistoryRouter } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { category } from '../../api/tmdbApi';

function HeroSlideItem(props) {
  let hisrory = unstable_HistoryRouter();

  const item = props.item;

  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive = async () => {
      const modal = document.querySelector(`#modal_${item.id}`);

      const videos = await tmdbApi.getVideos(category.movie, item.id);

      if (videos.results.length > 0) {
          const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
          modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
      } else {
          modal.querySelector('.modal__content').innerHTML = 'No trailer';
      }

      modal.classList.toggle('active');
  }
  return (
    <div>
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button className='btn btn' onClick={() => hisrory.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <Button className='btn btn-outline' onClick={setModalActive}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSlideItem