const NEWS = [
    { id: 1, category: '보도자료', title: '현대엘리베이터, \'스마트 엘리베이터 국내외 공모전\' 개최', date: '2022.08.22', link: '', src: '/assets/img/main_news01.jpg' },
    { id: 2, category: '보도자료', title: '현대엘리베이터, 개최', date: '2022.08.22', link: '', src: '/assets/img/main_news02.jpg' },
    { id: 3, category: '사보', title: '현대엘리베이터, \'스마트 엘리베이터 국내외 공모전\' 개최', date: '2022.08.22', link: '', src: '/assets/img/main_news03.jpg' },
]

const News = () => {
    return (
        <section className="News csc">
            <h2>현대엘리베이터 소식</h2>
            <p>현대엘리베이터의 새소식을 전해드립니다.</p>
            <div className="inner">
                {
                    NEWS.map(news => {
                        return (
                            <figure key={news.id}>
                                <a href={news.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + news.src} alt={news.title} />
                                    </div>
                                    <strong>{news.category}</strong>
                                    <div className="title">{news.title}</div>
                                    <span>{news.date}</span></a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default News;