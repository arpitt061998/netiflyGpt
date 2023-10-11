
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const MovieCard = ({posterpath, movieId}) => {
  const navigate = useNavigate();
  const playMovie = () => {
    const watchUrl = `/watch/${movieId}`;
    navigate(watchUrl);
  };

  if(!posterpath)
    return null;
  return (
    <div className="w-36 md:w-48 pr-4" onClick={playMovie}>
        <img alt="Movie card" className="cursor-pointer"
          src={IMG_CDN_URL + posterpath} 
        />
    </div>
  );
};

export default MovieCard;