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

// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";
// import { useEffect } from "react";
// const VideoBackground = ({ movieId }) => {

//   const trailerVideo = useSelector(store => store.movies?.trailerVideo);
//   useMovieTrailer(movieId);
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://www.youtube.com/iframe_api';
//     document.body.appendChild(script);
//     console.log("here",trailerVideo);
//     script.onload = () => {
//       // The YouTube API script has loaded
//       window.onYouTubeIframeAPIReady = initializeYouTubePlayer;
//     };

//     return () => {
//       // Clean up the script when the component unmounts
//       document.body.removeChild(script);
//     };
//   }, [trailerVideo]);

//   const initializeYouTubePlayer = () => {
//     // Create a new YouTube player
//     console.log(trailerVideo?.key)
//     if(trailerVideo){
//       const player = new window.YT.Player('youtube-player', {
//         height: '360',
//         width: '640',
//         videoId: trailerVideo?.key, // Replace with your YouTube video ID
//         playerVars: {
//           autoplay: 1, // Autoplay the video
//           controls: 0, // Hide player controls
//           mute: 1, // Start the video muted
//         },
//       });
//     }

//     // const muteVideo = () => {
//     //   player.mute();
//     // };

//     // const unmuteVideo = () => {
//     //   player.unMute();
//     // };
//   };

//   return (
//     <div className="w-full no-scrollbar">
//       <div id="youtube-player" className="aspect-video w-full no-scrollbar">
//       {console.log("rendering")}
//       </div>
//       {/* <iframe 
//         className="w-full no-scrollbar aspect-video"
//         src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1&controls=0&rel=0&showninfo=0&modestbranding=1"}
//         title="YouTube video player"
//         allow="accelerometer; autoplay;
//         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
//       </iframe> */}
//     </div>
//   )
// };

// export default VideoBackground;