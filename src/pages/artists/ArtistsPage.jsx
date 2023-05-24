import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./artists.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ArtistsPage = () => {
    const [ artists, setArtists ]= useState([])

    const fetchArtists = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists`)
            if (response.status === 200){
                const data = await response.json()
                setArtists(data)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchArtists()
    }, [])

    return artists ? (
        <>
          <h1 className="page-title">Variety Artists</h1>
          <div className="artist-list">
            {artists.map(artist => (
              <Link key={artist._id} to={`/artists/${artist._id}`} className="artist-link">
                <div className="artist-card">
                  <img className="artist-image" src={artist.artistPicUrl} alt='artist image' />
                  <h2 className="artist-name">{artist.artistName}</h2>
                  <h2 className="artist-url">
                  <a href={artist.soundCloudUrl} target="_blank" rel="noopener noreferrer">Soundcloud</a></h2>
                  <h2 className="artist-url">
                    <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></h2>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <button className="add-artist-btn">
              <Link to="/artists/add" variant="outlined">Add a new Artist</Link>
            </button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      );
}
export default ArtistsPage;