// YouTube API key
const API_KEY = "AIzaSyDEwfk3b9G0Oap6N7GHBeDHPzhnXxxr5hM";

<div className="video-detail col-md-8" style={{float: "left"}}>
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={video.snippet.title}></iframe>
    </div>
    <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
    </div>
</div>
