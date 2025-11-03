import Carousel from "./Carousel";
import UseFetch from "./UseFetch"

const ProductList = () => {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const { data, loading, error } = UseFetch(url);

    if(loading) return (
        <div className="text-amber-50 h-screen w-screen flex justify-center items-center">
            <h3 className="text-amber-50"> Loading Products... </h3>
        </div>
    )

    if(error) return (
        <> 
            <div className="text-amber-50 h-screen w-screen flex justify-center items-center">
                <h3 className="font-bold text-2xl">Error: &nbsp;</h3>
                <h4 className="mt-2">{ error }</h4> 
            </div>
        </>
    )

    return (
        <>
            {/* {JSON.stringify(data)} */}
            <div className="text-amber-50 text-3xl font-bold flex justify-center p-2 border-2 m-4 rounded-md">
                <h3>Menu List</h3>
            </div> 
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-4">
                {
                    Array.isArray(data) && data?.map(prod => (
                        <div key={prod.id} className="p-4 border-1 border-amber-50">
                            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full">
                                {/* <a href="#">
                                    <img className="rounded-t-lg" src={prod.images[0]} alt="" />
                                </a> */}
                                {
                                    prod.images.length > 0 ? (
                                        <Carousel data={ prod?.images } />
                                    ) : (
                                        <a href="#">
                                            <img className="rounded-t-lg" src={data?.images[0]} alt="" onError={(e) => { e.currentTarget.src = "https://images.pexels.com/photos/11829002/pexels-photo-11829002.jpeg" }} />
                                        </a>
                                    )
                                }
                                <div className="p-5 h-70 flex justify-between flex-col">
                                    <div className="">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400 line-clamp-3">{prod.description}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex bg-blue-600 text-amber-50 align-middle justify-center rounded-md p-1.5">
                                            <h3>Price: &nbsp;</h3> <p> $ {prod.price} /-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductList