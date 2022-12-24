import React from "react";

import musicList from "Config/musicList.json";

import style from "./home.scss";
import MusicListCard from "./musicListCard";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import headerState from "State/headerState";

const Home:React.FC = () => {
    const navigate = useNavigate();
    const setTitle = useSetAtom(headerState);

    React.useEffect(()=>{
        //update title
        setTitle("Home");
        //add shortcut
        window.addEventListener("keydown",(e)=>{
            if(e.code=="Escape") navigate("/settings");
        })

        return()=>{
            window.removeEventListener("keydown", (e) => {
                if (e.code == "Escape") navigate("/settings");
            })
        }
    },[])

    return(
        <div className={style.home}>
            {
                musicList.musicList.map((c)=>{
                    return(
                        <MusicListCard content={c} key={c.name} />
                    )
                })
            }
        </div>
    )
}

export default Home;