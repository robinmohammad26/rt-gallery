import { getFeatureTiles } from "@/fetchData/allData";
import { Button } from "@heroui/react";
import Image from "next/image";


const TilesDetailsPage = async({params}) => {

        const {id} = await params;

        const allTilesData = await getFeatureTiles();
        const selectedTilesData = await allTilesData.find(tilesDetails => tilesDetails.id == id);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl font-bold my-6">Tiles Details Page</h1>
            <div className="grid grid-cols-2 gap-2 shadow-md p-6 my-10">
                <div className=" relative aspect-square p-5">
                    <Image 
                    src={selectedTilesData.image} 
                    fill
                    className="object-cover rounded-2xl"
                    alt="Details Tiles Image" />
                </div>
                <div className="p-5 space-y-5">
                    <span className="px-4 py-2 bg-sky-200 rounded-full font-bold text-sky-600">{selectedTilesData.category.toUpperCase()}</span>
                    <h2 className="text-6xl font-bold m-2">{selectedTilesData.title}</h2>
                    <div>
                        <p className="flex items-center gap-2 text-2xl text-green-500">Price : <span className="text-6xl font-bold">{selectedTilesData.price}</span><span>{selectedTilesData.currency}</span></p>
                    </div>
                    {
                        selectedTilesData.inStock ? <p className="text-green-500 text-2xl">inStock</p>
                        : <p className="text-red-500 text-2xl">out of Stock</p>
                    }

                    <div className="flex gap-3 my-5">
                        <Button btn btn-primary>{selectedTilesData.dimensions}</Button>
                        <Button btn btn-primary>{selectedTilesData.material}</Button>
                    </div>
                    
                    <p className="font-semibold text-2xl text-neutral">Description: {selectedTilesData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;