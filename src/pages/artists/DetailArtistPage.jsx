import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const DetailArtistPage = () => {
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
        console.log(data)
        setArtist(data)
        console.log(artist)
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
      })
      if (response.status === 200) {
        navigate('/all-artists')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return artist ? (
    <>
        <div>
    <h1>{artist.artistName} </h1>
    <img width="200px" src={artist.artistPicUrl} alt='artist image'/>
      <h4> First Name: {artist.firstName} </h4>
      <h4> Last Name: {artist.lastName} </h4>
      <h4>Soundcloud: <Link to={artist.soundCloudUrl}>{artist.soundCloudUrl}</Link></h4>
      <h4>Beatport: <Link to={artist.beatPortUrl}>{artist.beatPortUrl}</Link></h4>
      <h4>Instagram: <Link to={artist.instagramUrl}>{artist.instagramUrl}</Link></h4>
      <h4>Facebook: <Link to={artist.facebookUrl}>{artist.facebookUrl}</Link></h4>
      <h4>Web Page: <Link to={artist.webPage}>{artist.webPage}</Link></h4>
        </div>
      <button>
        <Link to={`/artists/update/${id}`}>Update Artist Info</Link>
      </button>
      <button type='button' onClick={handleDelete}>
        <Link to={`/artists`}>Delete Artist</Link>
      </button>
    </>
  ) : (
    <h1>Loading information about your Artist</h1>
  )
}

export default DetailArtistPage;