import Marquee from "react-fast-marquee";


const Banner = () => {
    return (
        <>
            <div className="hero min-h-[80vh] bg-slate-700 bg-[url(/banner.jpg)] bg-blend-overlay">
                <div className="hero-content text-center">
                    <div className="max-w-[778px] space-y-5">
                        <h1 className="text-7xl font-bold text-white">Discover Your Perfect Aesthetic</h1>
                        <button className="px-12 py-4 text-2xl rounded-full text-white font-semibold bg-pink-800 hover:bg-pink-600 cursor-pointer">Browse Now</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10 bg-pink-700 p-10 rounded-md">
                <Marquee className="text-xl font-semibold text-white">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </>
    );
};

export default Banner;