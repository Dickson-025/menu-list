import React from 'react'

const Carousel = ({ data }) => {
    const [current, setCurrent] = React.useState(0);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    const goToSlide = (index) => setCurrent(index);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* For here */}
                {
                    data.map((item, i)=> (
                        <div key={i} className={`${i === current  ? 'block' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
                            {/* <img src={ item } className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                            <img src={item} onError={(e) => { e.currentTarget.src = "https://images.pexels.com/photos/11829002/pexels-photo-11829002.jpeg" }} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="" />
                        </div>
                    ))
                }
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {/* For here */}
                {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> */}
                {
                    data.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`w-3 h-3 rounded-full ${i === current ? 'bg-blue-700' : 'bg-gray-300'}`}
                            aria-current={i === current ? "true" : "false"}
                            aria-label={'Slide ' + (i + 1)}
                            onClick={() => goToSlide(i)}
                        ></button>
                    ))
                }
            </div>
            <button type="button" onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Carousel