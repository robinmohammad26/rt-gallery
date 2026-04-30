import Link from "next/link";

const TilesCard = async ({featureTile}) => {

    return (
        <>
            <div className="card bg-base-100 shadow-sm p-6 space-y-3">
                <figure className="">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="text-center">
                    <h2 className="card-title">{featureTile.title}</h2>
                    <div className="mt-5">
                        <button className="btn btn-outline w-full rounded-full"><Link href={''}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TilesCard;