import { useEffect } from "react";
import { useState } from "react"

const SERVICE = [
    {
        id: 1, title: '증명서 발급조회',
        sub: [
            { title: '증명서 발급조회', link: '#!' },
            { title: '사용인감신고서 발급조회', link: '#!' },
            { title: '재직증명서 발급조회', link: '#!' },
        ]
    },
    {
        id: 2, title: '인트라넷',
        sub: [
            { title: '자재협력시스템', link: '#!' },
            { title: '인사정보시스템', link: '#!' },
            { title: '그룹웨어', link: '#!' },
            { title: '디지털세금계산서', link: '#!' },
            { title: '전자구매입찰', link: '#!' },
        ]
    },
    {
        id: 3, title: '패밀리사이트',
        sub: [
            { title: '현대아산', link: '#!' },
            { title: '현대무벡스', link: '#!' },
            { title: '현대경제연구원', link: '#!' },
            { title: '현대투자파트너스', link: '#!' },
            { title: '현대글로벌', link: '#!' },
        ]
    },
]

const ServiceLink = () => {
    const [slink, setLink] = useState();
    const [swc, setSwc] = useState(false);
    // ↓ useEffect 사용해서 토글(두번클릭 안해도됨)
    useEffect(() => {
        setSwc(true)
    }, [slink])
    return (
        <div className="ServiceLink">
            {
                SERVICE.map((link, idx) => {
                    return (
                        <li key={link.id}>
                            <div className={"title" + ((slink === idx && swc) ? ' on' : '')}
                                onClick={() => {
                                    setLink(idx);
                                    setSwc(!swc);
                                }}>{link.title}</div>

                            <ul className={"subLink" + ((slink === idx && swc) ? ' on' : '')}>
                                {
                                    link.sub.map((sub, idx) => {
                                        return (
                                            <a href={sub.link}><li>{sub.title}</li></a>
                                        )
                                    })
                                }
                            </ul>

                        </li>
                    )
                })
            }
        </div >
    )
}

export default ServiceLink;