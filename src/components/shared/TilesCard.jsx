import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ featureTile }) => {

    return (
        <div className="card bg-base-100 shadow-sm p-6 space-y-3">
            <figure className="relative aspect-square">
                <Image 
                    src={featureTile.image}
                    fill
                    alt="Tiles image"
                    className="object-cover rounded-md"
                />
            </figure>

            <div className="text-center">
                <h2 className="card-title">{featureTile.title}</h2>

                <div className="mt-5">
                    <Link href={`/tilesDetails/${featureTile.id}`}>
                        <button className="btn btn-outline w-full rounded-full">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;