export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=kBa6UrTuGYaD2Ww3YcIqd1gJqWhDqUK7&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height.url,
  }));
  return gifs;
};