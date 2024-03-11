import {register} from 'swiper/element/bundle'
import './carrossel.css'
import { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import 'swiper/modules'
// import 'swiper/modules/navigation.mjs';
// import 'swiper/modules/pagination.mjs';
// import 'swiper/modules/scrollbar.mjs';

register();

function Carrossel() {
    const [slidePerView, setSlidePerView] = useState(1)

    const data = [
        {id: '1', image: 'https://img.freepik.com/fotos-gratis/arranjo-lindo-de-papel-de-parede-de-flores_23-2149057015.jpg'},
        {id: '2', image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg'},
        {id: '3', image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg'},
        {id: '4', image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg'},    
    ]

    return (
        <div id="teste">
            <Swiper
            slidesPerView={slidePerView}
            pagination={{clickable: true}}
            navigation
            className='slide-box'
            >
                {data.map( (item) =>(
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
  }
  
  export default Carrossel