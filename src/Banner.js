import React, { useState, useEffect } from 'react'
import "./Banner.css"

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]) // State variable to store the movie data

    useEffect(() => {
        // Fetch the data from the specified URL when the component mounts
        fetch(`${fetchUrl}`)
            .then(resp => resp.json())
            .then(data => setMovie(() => {
                return data[Math.floor(Math.random() * data.length - 1)] // Update movie state with a random movie from the data
            }))
    }, [fetchUrl]) // Run the effect whenever the fetchUrl prop changes

    function truncateString(str, num) {
        // Truncate a given string if it exceeds a certain length
        if (str?.length > num) {
            let subStr = str.substring(0, num);
            return subStr + "...";
        } else {
            return str;
        }
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, // Set the background image URL
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1> {/* Render the movie title */}
                {/* <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div> */}
                <h1 className="banner__description">{truncateString(movie?.overview, 150)}</h1> {/* Render the truncated movie description */}
            </div>
            <div className="banner--fadeBottom"></div> {/* Create a fade effect at the bottom of the banner */}
        </header>
    )
}

export default Banner
