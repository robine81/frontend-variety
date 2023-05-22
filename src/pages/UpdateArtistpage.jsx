import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateArtistPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ artistName: '', firstName: '', lastName: '', artistPicUrl: '', soundCloudUrl: '', beatPortUrl: '', instagramUrl: '', facebookUrl: '', webPage: '', })
    const [isLoading, setIsLoading] = useState(true)

    const fetchArtist = async () => {
        try {
            const response = await fetch(`http://localhost:5005/artists/${id}`)
            const artist = await response.json()
            delete artist.id
            console.log(artist)
            console.log(inputs)
            setInputs(artist)
            setIsLoading(false)
    }       catch (error) {
            console.log(error)
    }
  }
    useEffect(() => {
    fetchArtist()
  }, [id])

  const handleChange = event => {
    setInputs(prevInputs => {
        let currentValue = event.target.value
        const currentTarget = event.target.name
  
        if (event.target.type === 'checkbox') {
          currentValue = event.target.checked
          console.log(event.target.checked)
        }
  
        return { ...prevInputs, [currentTarget]: currentValue }
      })
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const payload = { ...inputs }
    
        try {
          const response = await fetch(`http://localhost:5005/artists/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
          if (response.status === 200) {
            console.log('All good')
            // Navigate to the details page
            navigate(`/detail/${id}`)
          }
        } catch (error) {
          console.log(error)
        }
      }
    
  
    return isLoading ? (
        <h1>Loading...</h1>
  ) : (
    <>
      <h1>Update {artist.artistName}</h1>
      <form
        style={{ display: 'grid', gridTemplate: 'repeat(5, 1fr) / auto' }}
        onSubmit={handleSubmit}
      >
        <label>
        Artist Name:
          <input value={inputs.artistName} name='Artist Name' onChange={handleChange} />
        </label>
        <label>
        First Name:
          <input value={inputs.firstName} name='First Name' onChange={handleChange} />
        </label>
        <label>
        Last Name:
          <input value={inputs.lastName} name='Last Name' onChange={handleChange} />
        </label>
        <label>
        Artist Pic:
          <input value={inputs.artistPicUrl} name='Artist Pic' onChange={handleChange} />
        </label>
        <label>
        Soundcloud:
          <input value={inputs.soundCloudUrl} name='Soundcloud' onChange={handleChange} />
        </label>
        <label>
        Beatport:
          <input value={inputs.beatPortUrl} name='Beatport' onChange={handleChange} />
        </label>
        <label>
          Name:
          <input value={inputs.instagramUrl} name='Instagram' onChange={handleChange} />
        </label>
        <label>
        Facebook:
          <input value={inputs.facebookUrl} name='Facebook' onChange={handleChange} />
        </label>
        <label>
        Web Page:
          <input value={inputs.webPage} name='Web Page' onChange={handleChange} />
        </label>
        <button type='submit'>Save Changes</button>
      </form>
    </>
  )
}
 
export default UpdateArtistPage;