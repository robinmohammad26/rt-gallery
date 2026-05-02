export const getFeatureTiles = async () => {
    const res = await fetch('https://rt-gallery.vercel.app/tiles.json', { cache: 'no-store' });
    return await res.json();
}

