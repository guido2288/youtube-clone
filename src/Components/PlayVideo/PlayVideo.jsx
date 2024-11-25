import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './PlayVideo.css'

import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import { valueConverter } from '../../Helpers/valueConverter'

const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async() => {
        // Fetching Video Data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetailsUrl)
            .then(response => response.json())
            .then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async() => {
        // Fetching Channel Data
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDataUrl)
            .then(response => response.json())
            .then(data => setChannelData(data.items[0]));


        // Fetching Comment Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url)
            .then(response => response.json())
            .then(data => setCommentData(data.items));
    }

    useEffect(() => {
        fetchVideoData();
    }, [])

    useEffect(() => {
        fetchOtherData();
    }, [apiData]);
    

  return (
    <div className='play-video'>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
            <div>
                <span><img src={like} alt="like.png" /> {apiData ? valueConverter(apiData.statistics.likeCount) : "n/c"}</span>
                <span><img src={dislike} alt="dislike.png" /> </span>
                <span><img src={share} alt="share.png" /> Share</span>
                <span><img src={save} alt="save.png" /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData ? channelData.snippet.thumbnails.default.url : {user_profile}} alt="channel_logo" />
            <div>
                <p>{apiData ? apiData.snippet.channelTitle : 'Channel Title...'}</p>
                <span>{channelData? valueConverter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description here..."}</p>
            <hr />
            <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : 0} Comments</h4>

            {
                commentData.map( (item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user_profile" />
                            <div>
                                <h3>{ item.snippet.topLevelComment.snippet.authorDisplayName } <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{ item.snippet.topLevelComment.snippet.textDisplay }</p>
                                <div className="comment-action">
                                    <img src={like} alt="like" />
                                    <span>{ valueConverter(item.snippet.topLevelComment.snippet.likeCount) }</span>
                                    <img src={dislike} alt="dislike" />
                                </div>
                            </div>
                        </div>
                    )
                } )
            }

        </div>

    </div>
  )
}

export default PlayVideo