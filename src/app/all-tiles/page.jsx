import TilesCard from "@/components/shared/TilesCard";
import { getFeatureTiles } from "@/fetchData/allData";


const AllTilesPage = async () => {

    const featureTiles = await getFeatureTiles();


    return (
        <div className="container mx-auto">
            <div className="my-6">
                <h2 className="text-3xl font-bold">Our Collections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
                {
                    featureTiles.map(featureTile => <TilesCard key={featureTile.id} featureTile={featureTile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;