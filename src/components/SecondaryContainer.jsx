import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div>
      
    </div>
  )
}

export default SecondaryContainer