import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddArtistPage = () => {
    const navigate = useNavigate()
    const [artistName, setArtistName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [artistPicUrl, setArtistPicUrl] = useState('')
    const [soundCloudUrl, setSoundCloudUrl] = useState('')
    const [beatPortUrl, setBeatPortUrl] = useState('')
    const [instagramUrl, setInstagramUrl] = useState('')
    const [facebookUrl, setFacebookUrl] = useState('')
    const [webPage, setWebPage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const newArtist = {
            artistName,
            firstName,
            lastName,
            artistPicUrl,
            soundCloudUrl,
            beatPortUrl,
            instagramUrl,
            facebookUrl,
            webPage,
        }
        try {
            const response = await fetch(`http://localhost:5005/artists/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newArtist),
            });

            if (response.status === 200) {
                console.log('Artist created:', await response.json())
                setArtistName('')
                setFirstName('')
                setLastName('')
                setArtistPicUrl('')
                setSoundCloudUrl('')
                setBeatPortUrl('')
                setInstagramUrl('')
                setFacebookUrl('')
                setWebPage('')
                navigate(`/artists`)
            } else {
                console.error('Failed to create artist:')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Add a new Artist</h1>
            <form
            style={{ display: 'grid', gridTemplate: 'repeat(5, 1fr) / auto' }}
            onSubmit={handleSubmit}>
        <label>Artist Name</label>
        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Profile Image</label>
        <input
          type="text"
          value={artistPicUrl}
          onChange={(e) => setArtistPicUrl(e.target.value)}
        />
        <label>Soundcloud</label>
        <input
          type="text"
          value={soundCloudUrl}
          onChange={(e) => setSoundCloudUrl(e.target.value)}
        />
        <label>Beatport</label>
        <input
          type="text"
          value={beatPortUrl}
          onChange={(e) => setBeatPortUrl(e.target.value)}
        />
        <label>Instagram</label>
        <input
          type="text"
          value={instagramUrl}
          onChange={(e) => setInstagramUrl(e.target.value)}
        />
        <label>Facebook</label>
        <input
          type="text"
          value={facebookUrl}
          onChange={(e) => setFacebookUrl(e.target.value)}
        />
        <label>Web Page</label>
        <input
          type="text"
          value={webPage}
          onChange={(e) => setWebPage(e.target.value)}
        />
        <button type="submit">Add Artist</button>
            </form>
        </div>
      );
}
 
export default AddArtistPage;