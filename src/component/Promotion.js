import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => {

    const MOVIE = useRef();
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            playtlist: 'raw3Nu0_mBQ',
            controls: '0',
            showingo: '0',
            mute: '1',
        },
    };
    return (
        <section className="Promotion csc" >
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div id="movie">
                    <YouTube videoId="raw3Nu0_mBQ" opts={opts} ref={MOVIE} />
                    <div className="des">
                        (console.log(MOVIE))
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Promotion;