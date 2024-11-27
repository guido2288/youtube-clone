import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { API_KEY } from '../../data'
import { valueConverter } from '../../Helpers/valueConverter'
import './Recommended.css'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fechData = async() => {
        const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_Url)
                .then(response => response.json())
                .then(data=> setApiData(data.items))
    }

    useEffect(() => {
      fechData();
    }, [])
    

  return (
    <div className='recommended'>
        {
            apiData.map( (item, index) => {
                return (
                    <Link to={`/video/${categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{ valueConverter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            } )
        }
        
    </div>
  )
}

export default Recommended