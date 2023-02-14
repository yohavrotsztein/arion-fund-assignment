import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
// icons
import { ReactComponent as LoadingIcon } from '../assets/loading_icon.svg';
// context
import reloadContext from '../context/reloadContext';
// styles
import "../App.css"
import { getPhotos } from '../api/api';

const ImagesGallery = () => {

  const { reload, setReload } = useContext(reloadContext);

  // randomize page number (maximum 33 in Picsum)
  const randomPage = Math.floor(Math.random() * 33);

  const [imagesGallery, setImagesGallery] = useState([])
  const [page, setPage] = useState(randomPage)

  const fetchData = async () => {
    const response = await getPhotos(page)
    setImagesGallery(imagesGallery => imagesGallery.concat(response.data))
    setPage(randomPage)
  }

  useEffect(() => {
   
    fetchData()
    
    if (reload) {
      setImagesGallery([])
      fetchData()
      setReload(false);
    }
    // eslint-disable-next-line
  }, [reload])

  const fetchMoreData = () => {
    setTimeout(() => {
      fetchData()
    }, 2000)
  }

  return (
    <InfiniteScroll
      dataLength={imagesGallery.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<LoadingIcon />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>That's it folks!</b>
        </p>
      }
    >
      <div className="image-grid" >
        {imagesGallery && imagesGallery.map((item, index) => (
          <div className="image-item" key={index} >
            <img src={item.download_url} alt={item.author}/>
            <p className='text-on-image'>Photo by <b>{item.author}</b></p>
          </div>
        ))
        }
      </div>
    </InfiniteScroll>
  )
}

export default ImagesGallery