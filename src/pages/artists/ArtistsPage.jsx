import { useEffect, useState, useContext } from 'react'
import { SessionContext } from "../../contexts/SessionContext";
import { Link } from 'react-router-dom'
import "./artists.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ArtistsPage = () => {
    const [ artists, setArtists ]= useState([])
    const { isLoggedIn } = useContext(SessionContext);

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
          <div className='flex-center-div'>
          {isLoggedIn && (
            <Button className="add-artist-btn"  sx={{ height: "40px" }}
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}>
              <Link to="/artists/add" variant="outlined">Add a new Artist</Link>
            </Button>
          )}
          </div>
          <div className="artist-list">
            {artists.map(artist => (
              <Link key={artist._id} to={`/artists/${artist._id}`} className="artist-link">
                <div className="artist-card">
                  <img className="artist-image" src={artist.artistPicUrl} alt='artist image' />
                  <h2 className="artist-name">{artist.artistName}</h2>
                  <div className="artist-url">
                  <a href={artist.soundCloudUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon color="teal" icon={faSoundcloud} className="social-icon" />
                  </a>
                  </div>
                  <div className="artist-url">
                  <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" >
                  <FontAwesomeIcon color="teal" icon={faInstagram} className="social-icon" />
                  </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      );
}
export default ArtistsPage;