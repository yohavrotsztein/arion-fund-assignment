import axios from 'axios'

export const getPhotos = async (page) => {
  try {
    const data = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    return data
  } catch (error) {
    console.error('error', error);
  }
  return null
};