import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ArtistsPage = () => {
    const [ artists, setArtists ]= useState([])

    const fetchArtists = async () => {
        try {
            const response = await fetch(`http://localhost:5005/artists`)
            if (response.status === 200){
                const parsed = await response.json()
                setArtists(parsed)
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
            <Link key={artist._id} to ={`/artists/${artist._id}`}>
                <h2>{artist.artistName}</h2>
                <h4>{artist.soundCloudUrl}</h4>
            </Link>
        ))}    
        </>
      ) : (
        <h1>Loading...</h1>
      );
}
export default ArtistsPage;