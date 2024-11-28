import './Movie.css';

function Movie({ movie }) {
    let { poster, name, alternativeName, year } = movie;

    let imageUrl = poster.previewUrl || 
    'https://png.pngtree.com/png-vector/20220626/ourmid/pngtree-cinema-clapper-movie-thing-video-device-clap-black-icon-action-studio-png-image_5472994.png'

    return (<div className="movie movie-card">
        <img className='movie__poster' src={ imageUrl } />
        <h3>{ name || alternativeName }</h3>
        <p>{ year }</p>
    </div>)
}

export default Movie;