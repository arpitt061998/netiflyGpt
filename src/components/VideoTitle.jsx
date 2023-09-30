import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video  md:pt-[15%] pt-[25%] md:px-24 px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="lg:text-6xl md:text-4xl font-bold text-2xl">{title}</h1>
        <p className="pt-6 text-lg lg:w-1/4 md:w-1/2 hidden md:line-clamp-5">{overview}</p>
        <div className='mt-6 md:mt-4'>
          <button className="py-2 md:px-12 px-6 md:text-lg text-sm text-black bg-white rounded-md hover:opacity-80"> <FontAwesomeIcon icon={faPlay} /> Play </button>
          <button className="bg-gray-500 py-2 ml-2 md:px-12 px-6 md:text-lg text-sm bg-opacity-50 rounded-md"> More Info </button>
        </div>
    </div>
  )
};

export default VideoTitle;