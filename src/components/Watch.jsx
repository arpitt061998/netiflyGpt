import Header from "./Header";
import PlayPage from "./PlayPage";
import { useParams } from "react-router-dom";

const Watch = () => {
  let { id } = useParams();
  return (
    <div>
      <Header/>
      <PlayPage id = {id}/>
    </div>
  )
};

export default Watch;