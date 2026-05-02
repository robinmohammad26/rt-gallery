import Banner from "@/components/shared/Banner";
import TilesCard from "@/components/shared/TilesCard";
import { getFeatureTiles } from "@/fetchData/allData";

export default async function Home() {
  const allFeatureTiles = await getFeatureTiles();

  const featureTiles = allFeatureTiles.slice(0,4);

  return (
    <>
      <div className="container mx-auto my-8 p-4">
        <Banner></Banner>
        <div>
          <h1 className="text-3xl font-bold mt-5 text-white">Featured Tiles</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
          {
            featureTiles.map(featureTile => <TilesCard key={featureTile.id} featureTile={featureTile}></TilesCard>)
          }
        </div>
      </div>
    </>
  );
}
