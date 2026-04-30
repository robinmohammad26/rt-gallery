import { getFeatureTiles } from "@/fetchData/allData";
import Image from "next/image";


const TilesDetailsPage = async({params}) => {

        const {id} = await params;

        const allTilesData = await getFeatureTiles();
        const selectedTilesData = allTilesData.find(tilesDetails => tilesDetails.id == id);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl font-bold my-6">Tiles Details Page</h1>
            <div className="grid grid-cols-2 gap-2">
                <div className=" relative aspect-square p-5">
                    <Image 
                    src={selectedTilesData.image} 
                    fill
                    className="object-cover rounded-2xl"
                    alt="Details Tiles Image" />
                </div>
                <div className=" p-5">
                    <h2 className="text-6xl font-bold mb-2">{selectedTilesData.title}</h2>
                    <div>
                        <p className="flex items-center gap-2 text-2xl">Price : <span className="text-6xl font-bold">{selectedTilesData.price}</span><span>{selectedTilesData.currency}</span></p>
                    </div>
                    <p className="font-semibold text-2xl text-neutral">Description: {selectedTilesData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;