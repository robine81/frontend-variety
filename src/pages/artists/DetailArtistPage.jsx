import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SessionContext } from "../../contexts/SessionContext";
import Button from "@mui/material/Button";
import "./artists.css";

const DetailArtistPage = () => {
  const { isLoggedIn } = useContext(SessionContext);
  const { token } = useContext(SessionContext);
  const { id } = useParams()
  const navigate = useNavigate()
  // Store the artist somewhere
  const [artist, setArtist] = useState()

  // Fetch the Artist
  const fetchArtist = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists/${id}`)
      if (response.status === 200) {
        const data = await response.json()
        setArtist(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // Call the fetch at the right time
    useEffect(() => {
        fetchArtist()    
  }, [id])

  const handleDelete = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
    }})
      if (response.status === 200) {
        navigate('/artists')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return artist ? (
    <>
    <div className='page-title'>
    <h1 className='page-title'>{artist.artistName} </h1>
    <img width="200px" src={artist.artistPicUrl} alt='artist image'/>
    </div>
    <div className='artist-text'>
      <h4> First Name: {artist.firstName}</h4>
      <h4> Last Name: {artist.lastName} </h4>
      <h5><Link to={artist.soundCloudUrl}>Soundcloud</Link></h5>
      <h5><Link to={artist.beatPortUrl}>Beatport</Link></h5>
      <h5><Link to={artist.instagramUrl}>Instagram</Link></h5>
      <h5><Link to={artist.facebookUrl}>Facebook</Link></h5>
      <h5><Link to={artist.webPage}>Web Page</Link></h5>
      </div>
        <div className='flex-center-div'>
        {isLoggedIn && ( 
        <Button className="add-artist-btn"  sx={{ height: "40px" }}
            variant="contained"
            color="primary"
            type='button'>
               <Link to={`/artists/update/${id}`}>Update Artist Info</Link>
            </Button>)}
            
            <br></br>
            
      {isLoggedIn && (
            <Button className="add-artist-btn"  sx={{ height: "40px" }}
            variant="contained"
            color="primary"
            type='button' onClick={handleDelete}>
            <Link to={`/artists`}>Delete Artist</Link>
            </Button>)}
            </div>
    </>
  ) : (
    <h1>Loading information about your Artist</h1>
  )
}

export default DetailArtistPage;