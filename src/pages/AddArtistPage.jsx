import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddArtistPage = () => {
    const navigate = useNavigate()
    const [artistName, setArtistName] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        const payload = {
            artistName,
        }
        try {
            const response = await fetch(`http://localhost:5005/artists`, {
                method: 'POST',
                headers: {
                    'Content Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.status === 200) {
                console.log('Artist created')
                const newArtist = await response.json()
                navigate(`/artists/${newArtist.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Add a New Artist</h1>
            <form onSubmit={handleSubmit}>
        <label>Artist Name</label>
        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <button type="submit">Add Artist</button>
            </form>
        </div>
      );
}
 
export default AddArtistPage;