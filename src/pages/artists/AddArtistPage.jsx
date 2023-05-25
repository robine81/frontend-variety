import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from "../../contexts/SessionContext";


const AddArtistPage = () => {
    const { token } = useContext(SessionContext);
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
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newArtist),
            });

                console.log('Artist created:', response.json())
                navigate(`/artists`)
            }
         catch (error) {
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