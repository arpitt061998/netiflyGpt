import { useRef, useState } from "react";
import unMuteLogo from "../assets/unmute.svg";
const UnMuteWidget = ({player}) => {
  const [muted, setMuted] = useState(true);
  const muteBtn = useRef(null);
  const unMuteBtn = useRef(null);
  const handleBtnClick = () => {
    console.log(player);
    if(muted){
      player.unMute();
      setMuted(false);
      unMuteBtn.current.classList.add("hidden");
      muteBtn.current.classList.remove("hidden");
    } else {
      player.mute();
      setMuted(true);
      unMuteBtn.current.classList.remove("hidden");
      muteBtn.current.classList.add("hidden");
    }
  }

  return (
    <div className="absolute z-50 text-white sm:block landscape:flex md:flex justify-end items-end w-full h-full pointer-events-none">
      <div className="bg-white rounded-full absolute landscape:static md:static top-[20%] right-[0%] w-[40px] h-[40px] md:w-[50px] md:h-[50px] mb-[10%] mr-[10%] opacity-70 pointer-events-auto">
        <img alt = "unmute" ref={unMuteBtn} onClick= {handleBtnClick} className = "p-2 cursor-pointer" src={unMuteLogo}/>
        <img alt = "mute" ref={muteBtn} onClick= {handleBtnClick} className = "p-2 cursor-pointer hidden" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M15.1045%203.49049C15.3503%202.99591%2015.9505%202.79422%2016.445%203.04001C19.7353%204.67514%2022%208.07218%2022%2012C22%2015.9278%2019.7353%2019.3249%2016.445%2020.96C15.9505%2021.2058%2015.3503%2021.0041%2015.1045%2020.5095C14.8587%2020.0149%2015.0604%2019.4148%2015.555%2019.169C18.1916%2017.8587%2020%2015.1396%2020%2012C20%208.86038%2018.1916%206.14131%2015.555%204.83104C15.0604%204.58525%2014.8587%203.98507%2015.1045%203.49049Z%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12.3827%203.07612C12.7564%203.2309%2013%203.59554%2013%204V20C13%2020.4045%2012.7564%2020.7691%2012.3827%2020.9239C12.009%2021.0787%2011.5789%2020.9931%2011.2929%2020.7071L6.58579%2016H5C3.34315%2016%202%2014.6569%202%2013V11C2%209.34315%203.34315%208%205%208H6.58579L11.2929%203.2929C11.5789%203.0069%2012.009%202.92134%2012.3827%203.07612ZM11%206.41422L7.70711%209.70711C7.51957%209.89465%207.26522%2010%207%2010H5C4.44772%2010%204%2010.4477%204%2011V13C4%2013.5523%204.44772%2014%205%2014H7C7.26522%2014%207.51957%2014.1054%207.70711%2014.2929L11%2017.5858V6.41422Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M16.7999%208.39943C16.4682%207.95784%2015.8414%207.86875%2015.3998%208.20044C14.9582%208.53213%2014.8691%209.15899%2015.2008%209.60058C15.7029%2010.269%2016%2011.0984%2016%2012C16%2012.9016%2015.7029%2013.731%2015.2008%2014.3994C14.8691%2014.841%2014.9582%2015.4679%2015.3998%2015.7996C15.8414%2016.1313%2016.4682%2016.0422%2016.7999%2015.6006C17.5532%2014.5977%2018%2013.3496%2018%2012C18%2010.6504%2017.5532%209.40231%2016.7999%208.39943Z%22%2F%3E%3C%2Fsvg%3E"/>
      </div>
    </div>
  )
}

export default UnMuteWidget;