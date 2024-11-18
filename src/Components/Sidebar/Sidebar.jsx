import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar? "" : "small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="side-links">
                <img src={ home } alt="home.png" /><p>Home</p>
            </div>
            <div className="side-links">
                <img src={ game_icon } alt="game_icon.png" /><p>Gaming</p>
            </div>
            <div className="side-links">
                <img src={ automobiles } alt="automobiles.png" /><p>Automobiles</p>
            </div>
            <div className="side-links">
                <img src={ sports } alt="sports.png" /><p>Sports</p>
            </div>
            <div className="side-links">
                <img src={ entertainment } alt="entertainment.png" /><p>Entertainment</p>
            </div>
            <div className="side-links">
                <img src={ tech } alt="tech.png" /><p>Technology</p>
            </div>
            <div className="side-links">
                <img src={ blogs } alt="blogs.png" /><p>Blogs</p>
            </div>
            <div className="side-links">
                <img src={ news } alt="news.png" /><p>News</p>
            </div>
        </div>

        <hr />

        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-links">
                <img src={ jack } alt="profile-img" /><p>PewDiePie</p>
            </div>
            <div className="side-links">
                <img src={ simon } alt="profile-img" /><p>Mrbeast</p>
            </div>
            <div className="side-links">
                <img src={ tom } alt="profile-img" /><p>Justin Bieber</p>
            </div>
            <div className="side-links">
                <img src={ megan } alt="profile-img" /><p>5-Minute Crafts</p>
            </div>
            <div className="side-links">
                <img src={ cameron } alt="profile-img" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar