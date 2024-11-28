import './Movie.css';
import { useState} from 'react';

function Movie({ movie }) {
    let { poster, name, alternativeName, year } = movie;

    let imageUrl = poster.previewUrl || 
    'https://png.pngtree.com/png-vector/20220626/ourmid/pngtree-cinema-clapper-movie-thing-video-device-clap-black-icon-action-studio-png-image_5472994.png'

    const colors = ['aquamarine', 'cadetblue', 'aqua', 'limegreen', 'lightgreen']
    const [color, setColor] = useState(0)
    const changeBG = () => {
        let newColor = Math.floor(Math.random() * colors.length)
        while (color === newColor) {
            newColor = Math.floor(Math.random() * colors.length)
        }
        setColor(newColor)
    }


    let maxNameLength = 17
    const reduceName = name => {
        if(name.length <= maxNameLength + 3) return name
        name = name.split(' ')
        if (name.length <= 1) {
            return name[0].slice(0, maxNameLength) + '...'
        }
        let result = ''
        let stopReduce = false
        result = name.reduce((result, item) => {
            let newResult = result + ' ' + item
            if((newResult.length < maxNameLength) && !stopReduce) {
                return newResult
            } else {
                stopReduce = true
                return result
            }
        })
        return result + '...'
    }

    return (<div 
            onMouseEnter={changeBG} 
            style={{background: colors [color]}}
            className="movie movie-card">

        <img alt={name || alternativeName} 
        className='movie__poster' 
        src={ imageUrl } />

        <h3>{ reduceName(name || alternativeName) }</h3>
        <p>{ year }</p>
    </div>)
}

export default Movie;