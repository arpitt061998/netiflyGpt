import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video  pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="py-2 px-12 text-lg text-black bg-white rounded-md hover:opacity-80"> <FontAwesomeIcon icon={faPlay} /> Play </button>
            <button className="bg-gray-500 py-2 ml-2 px-12 text-lg bg-opacity-50 rounded-md"> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle;