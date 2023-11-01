import React from "react";
import styles from "./movieList.module.css"


const MovieListItem=(props)=>{
    const {data} = props;
    console.log(data);
    return(
        <div style={styles.movieListItem}>

        </div>
    )
}

export default MovieListItem;