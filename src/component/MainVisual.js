

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const SLIDE = [
    { id: 1, content: "The world expands along\n the new path created.", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상을 위로 넓어집니다.", link: "/", title: "new world" },
    { id: 2, content: "The world expands along\n the new path created.", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상을 위로 넓어집니다.", link: "/", title: "The new world" },
    { id: 3, content: "The world expands along\n the new path created.", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상을 위로 넓어집니다.", link: "/", title: "The new" }
]


const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        dots: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <section className="MainVisual">
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={"itm0" + slide.id + (idx === IDX ? ' on' : '')} >
                                <div className="inner" >
                                    <p className="tit">{slide.content}</p>
                                    <div className="des">{slide.desc}</div>
                                    <a href={slide.link} className="cbtn">View More</a>
                                </div>
                            </figure>
                        )
                    })

                }
            </Slider >
            {console.log(mainSlide.current)}
            <div className="slideNum">
                0{IDX + 1}  <span> / 0{SLIDE.length}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => { mainSlide.current.slickGoTo(idx) }}>{dots.title}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className="xi-arrow-left"></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className="xi-arrow-right"></i></button>
            </div>
        </section >

    )
}

export default MainVisual;