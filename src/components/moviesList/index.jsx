import React from "react";
import styles from "./movieList.module.css"
import MovieListItem from "./movieListItem";
// import {MOVIES_DATA} from "../../movieData.jsx";

const MoviesList=()=>{
    return(
        <div className={styles.moviesListContainer}>
            {
                // MOVIES_DATA.map((item)=>(
                    // <MovieListItem data={item}/>

                // ))
            }
            
        </div>
    )
}
export default MoviesList;