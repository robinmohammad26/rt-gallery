import { getFeatureTiles } from "@/fetchData/allData";
import { Button } from "@heroui/react";
import Image from "next/image";


const TilesDetailsPage = async ({ params }) => {

    const { id } = await params;

    const allTilesData = await getFeatureTiles();
    const selectedTilesData = await allTilesData.find(tilesDetails => tilesDetails.id == id);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl font-bold my-6 text-white">Tiles Details Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 shadow-md p-6 my-10 bg-white rounded-2xl">
                <div className=" relative aspect-square p-5">
                    <Image
                        src={selectedTilesData.image}
                        fill
                        className="object-cover rounded-2xl"
                        alt="Details Tiles Image" />
                </div>
                <div className="p-5 space-y-5">
                    <span className="px-4 py-2 bg-sky-200 rounded-full font-bold text-sky-600">{selectedTilesData.category.toUpperCase()}</span>
                    <h2 className="text-6xl font-bold my-10">{selectedTilesData.title}</h2>
                    <div className="flex items-center gap-2">
                        <p className="text-4xl font-bold">Dimensions :</p>
                        <p className="text-2xl font-normal text-gray-400 mt-2">{selectedTilesData.dimensions}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <p className="text-4xl font-bold">Material :</p>
                        <p className="text-2xl font-normal text-gray-400 mt-2">{selectedTilesData.material}</p>
                    </div>
                    <hr />
                    <div className="flex flex-col justify-center gap-2 mb-6">
                        <p className="text-4xl font-bold">Description :</p>
                        <p className="text-2xl font-normal text-gray-400 mt-2">{selectedTilesData.description}</p>
                    </div>
                    <hr />
                    <div>
                        <p className="flex items-center gap-2 text-2xl text-green-500">Price : <span className="text-6xl font-bold">{selectedTilesData.price}</span><span>{selectedTilesData.currency}</span></p>
                    </div>
                    {
                        selectedTilesData.inStock ? <p className="text-green-500 text-2xl">inStock</p>
                            : <p className="text-red-500 text-2xl">out of Stock</p>
                    }
                    <hr />
                    <div>
                        <button className="btn text-white px-12 py-7 text-xl bg-pink-700 hover:bg-pink-500">ADD TO CART</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;