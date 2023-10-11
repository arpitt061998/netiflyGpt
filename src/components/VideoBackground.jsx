import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect,useState } from "react";
import UnMuteWidget from "./UnMuteWidget";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [playerInstance, setPlayerInstance] = useState(null);
  useMovieTrailer(movieId);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      initializeYouTubePlayer();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [trailerVideo]); 

  function onPlayerReady(event){
    const ytIframes = document.getElementsByTagName("iframe");
    const iframeArray = Array.from(ytIframes);
    iframeArray.forEach((iframe) => {
      iframe.classList.add("w-full","h-full", "no-scrollbar", "aspect-video");
    });
    setPlayerInstance(event.target);
  }

  const initializeYouTubePlayer = () => {
    if (trailerVideo) {
      window.YT.ready(function() {
        const player = new window.YT.Player("youtube-player", {
          videoId: trailerVideo?.key,
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
          },
          events: {
            'onReady': onPlayerReady,
          }
        });
      })
    }
  };

  return (
    <div>
      <UnMuteWidget player = {playerInstance}/>
      <div id="youtube-player" className="w-full no-scrollbar h-full">
      </div>
    </div>

  );
};

export default VideoBackground;
