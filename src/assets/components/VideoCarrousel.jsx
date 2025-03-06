import React, { useEffect, useState } from 'react'

const VideoCarrousel = ({videos = {}}) => {
    
    const [video, setVideo] = useState(null)
    

    useEffect(() => {
        for (let i = 0; i < videos.length; i++) {
            setTimeout(() => {
                setVideo(videos[i])
                i++
            }, 6000)
            if(i === videos.length) {i = 0};
        }
    }, [video])

    return (
        <>{ video &&
            <video loop autoPlay>
                <source src={video} type='video/mp4'></source>
            </video>
            }
        </>
    )
}

export default VideoCarrousel