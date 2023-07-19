import React, {useEffect,useState} from 'react';

const Backtotop = () => {

    const [pageOffsetY, setPageOffsetY]=useState(0);
    useEffect(()=>{
        const handleScroll=()=>{
            setPageOffsetY(window.pageYOffset);
        };
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-outline-primary btn-lg-square shadow-none back-to-top" style={{display: pageOffsetY >= 100 ? 'block': 'none'}} onClick={scrollToTop}><i className="bi bi-arrow-up"></i></a>
        </>
    )
}

export default Backtotop