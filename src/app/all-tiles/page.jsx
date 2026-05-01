"use client";

import { useEffect, useState } from "react";
import SearchTiles from "@/components/shared/SearchTiles";
import TilesCard from "@/components/shared/TilesCard";
import { getFeatureTiles } from "@/fetchData/allData";

const AllTilesPage = () => {

    const [featureTiles, setFeatureTiles] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await getFeatureTiles();
            setFeatureTiles(data);
        };
        loadData();
    }, []);

    return (
        <div className="container mx-auto">

            <div className="my-6 flex justify-between">
                <h2 className="text-3xl font-bold">Our Collections</h2>

                <SearchTiles
                    featureTiles={featureTiles}
                    setSearchResults={setSearchResults}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">

                {
                    searchResults.length > 0
                        ? searchResults.map(tile => (
                            <TilesCard key={tile.id} featureTile={tile} />
                        ))
                        : featureTiles.map(tile => (
                            <TilesCard key={tile.id} featureTile={tile} />
                        ))
                }

            </div>
        </div>
    );
};

export default AllTilesPage;