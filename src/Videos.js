import React from 'react'
import VideoCard from "./VideoCard";
import "./Videos.css";
function Videos() {
    return (
        <div className="recommendedVideos">
        <h2>Trending</h2>

        <div className="recommendedVideos_videos">
            <VideoCard
            title="Dhee ft. Arivu - Enjoy Enjaami (Prod. Santhosh Narayanan)"
            views="56,665,454 views"
            timestamp="2 weeks ago"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnhubuLIx0E8PvnxM6McIoUIWQiet8spNwurK_F3=s88-c-k-c0x00ffffff-no-rj"
            channel="maajja"
            image="https://i.ytimg.com/an_webp/eYq7WapuDLU/mqdefault_6s.webp?du=3000&sqp=CK-Q7IIG&rs=AOn4CLAMbCiENnhouBtX9jnm6bWvNEXSXQ"
            
            
            />
             
        </div>
    </div>
    )
}

export default Videos
