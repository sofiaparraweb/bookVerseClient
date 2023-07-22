import React, { useEffect, useRef } from "react";
import style from "./PreOrder.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreOrder = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    const sliderRef = useRef(null);
    useEffect(() => {
        const slider = sliderRef.current;
    
        const interval = setInterval(() => {
          slider.slickNext();
        }, 5000);
    
        return () => {
            clearInterval(interval); // Limpia el intervalo al desmontar el componente
        };
    }, []);
    
    const settings = {
        dots: true,
        dotsClass: style.customDots,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <div className={style.sliderContainer}>
            <Slider className={style.GalleryHome} ref={sliderRef} {...settings}>
                <div className={style.slideItem}>
                    <img src="src\assets\assets\Pre-Order.jpg" alt="PreOrder1" />
                    <div className={style.slideContent}>
                        {/* <Link to="/about" onClick={handleClick}> */}
                            <button className={style.buttoninfo}>Pre-Order</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className={style.slideItem}>
                    <img src="src\assets\assets\Pre-Order2.jpg" alt="PreOrder2" />
                    <div className={style.slideContent}>
                        {/* <Link to="/about" onClick={handleClick}> */}
                            <button className={style.buttoninfo}>Pre-Order</button>
                        {/* </Link> */}
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default PreOrder;
