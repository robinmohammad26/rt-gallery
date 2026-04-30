import Image from "next/image";
import Link from "next/link";

const TilesCard = async ({featureTile}) => {

    return (
        <>
            <div className="card bg-base-100 shadow-sm p-6 space-y-3">
                <figure className="relative aspect-square">
                    <Image 
                    src={featureTile.image}
                    fill
                    alt="Tiles images"
                    className="object-cover rounded-md"
                    />
                </figure>
                <div className="text-center">
                    <h2 className="card-title">{featureTile.title}</h2>
                    <div className="mt-5">
                        <button className="btn btn-outline w-full rounded-full"><Link href={`/tilesDetails/${featureTile.id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TilesCard;