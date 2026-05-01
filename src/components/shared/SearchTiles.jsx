"use client"
import React from 'react';

const SearchTiles = ({ featureTiles, setSearchResults }) => {

    const searchTileByTitle = (e) => {
        e.preventDefault();

        const Data = e.target.search.value;
        const searchDataValid = Data.trim().toLowerCase();

        if (searchDataValid === "") {
            setSearchResults([]); // reset
            return;
        }

        const filtered = featureTiles.filter((tiles) =>
            tiles.title.toLowerCase().includes(searchDataValid)
        );

        setSearchResults(filtered);
    }

    return (
        <form onSubmit={searchTileByTitle}>
            <div className="join">
                <div className='flex'>
                    <label className="input validator join-item">
                        <input type="text" name="search" placeholder="Search Here" />
                    </label>
                </div>
                <button type='submit' className="btn btn-primary join-item">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchTiles;