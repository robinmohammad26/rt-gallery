export const getFeatureTiles = async () => {
    const res = await fetch('https://rt-gallery.vercel.app/tiles.json');
    return await res.json();
}

