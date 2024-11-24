import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="like.png" /> 125</span>
                <span><img src={dislike} alt="dislike.png" /> 2</span>
                <span><img src={share} alt="share.png" /> Share</span>
                <span><img src={save} alt="save.png" /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="profile.png" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channer that makes learning Easy</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nobis deserunt eaque adipisci consequuntur, ducimus maiores, nisi a, et quam porro vitae soluta dicta tempore temporibus. Sit neque dolore facere.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>244</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nobis deserunt eaque adipisci consequuntur, ducimus maiores, nisi a, et quam porro vitae soluta dicta tempore temporibus. Sit neque dolore facere.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>244</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nobis deserunt eaque adipisci consequuntur, ducimus maiores, nisi a, et quam porro vitae soluta dicta tempore temporibus. Sit neque dolore facere.</p>
                    <div className="comment-action">
                        <img src={like} alt="like" />
                        <span>244</span>
                        <img src={dislike} alt="dislike" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PlayVideo