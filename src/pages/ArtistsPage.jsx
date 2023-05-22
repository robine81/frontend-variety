import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ArtistsPage = () => {
    const [ artists, setArtists ]= useState([])

    const fetchArtists = async () => {
        try {
            const response = await fetch(`http://localhost:5005/artists`)
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
        <h1>Variety Artists</h1>
        {artists.map(artist => (
            <Link key={artist._id} to ={`/artist/${artist._id}`}>
                <img width="150px" src={artist.artistPicUrl} alt='artist image'/>
                <h2>{artist.artistName}</h2>
                <h4>{artist.soundCloudUrl}</h4>
            </Link>
        ))}
            <div>
              <button>
                 <Link to = {`/artist/add`}>Add a new Artist </Link>
              </button>
            </div>    
        </>
      ) : (
        <h1>Loading...</h1>
      );
}
export default ArtistsPage;