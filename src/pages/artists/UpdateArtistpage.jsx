import { useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SessionContext } from "../../contexts/SessionContext";

const UpdateArtistPage = () => {
    const { token } = useContext(SessionContext);
    const { id } = useParams()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ artistName: '', firstName: '', lastName: '', artistPicUrl: '', soundCloudUrl: '', beatPortUrl: '', instagramUrl: '', facebookUrl: '', webPage: '', })
    const [isLoading, setIsLoading] = useState(true)

    const fetchArtist = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists/${id}`)
            const artist = await response.json()
            delete artist.id
            //console.log(artist)
            //console.log(inputs)
            setIsLoading(false)
            setInputs(artist)
    }       catch (error) {
            console.log(error)
    }
  }
    useEffect(() => {
    fetchArtist()
  }, [id])

  const handleChange = event => {
    const { name, value } = event.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }
        //let currentValue = event.target.value
        //onst currentTarget = event.target.name
  
        //if (event.target.type === 'checkbox') {
          //currentValue = event.target.checked
          //console.log(event.target.checked)
        
  /*
        return { ...prevInputs, [currentTarget]: currentValue }
      })
    }*/

    const handleSubmit = async (event) => {
        event.preventDefault()
        //const payload = { ...inputs }
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/artists/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(inputs),
          })
          if (response.status === 200) {
            console.log('All good')
            // Navigate to the details page
            navigate(`/artists/${id}`)
          }
        } catch (error) {
          console.log(error)
        }
      };
    
  
        return isLoading ? (
        <h1>Loading...</h1>
  ) : (
    <>
      <h1>Update {inputs.artistName}</h1>
      <form
        style={{ display: 'grid', gridTemplate: 'repeat(5, 1fr) / auto' }}
        onSubmit={handleSubmit}
      >
        <label>
        Artist Name:
          <input value={inputs.artistName} name='artistName' onChange={handleChange} />
        </label>
        <label>
        First Name:
          <input value={inputs.firstName} name='firstName' onChange={handleChange} />
        </label>
        <label>
        Last Name:
          <input value={inputs.lastName} name='lastName' onChange={handleChange} />
        </label>
        <label>
        Artist Pic:
          <input value={inputs.artistPicUrl} name='artistPicUrl' onChange={handleChange} />
        </label>
        <label>
        Soundcloud:
          <input value={inputs.soundCloudUrl} name='soundCloudUrl' onChange={handleChange} />
        </label>
        <label>
        Beatport:
          <input value={inputs.beatPortUrl} name='beatPortUrl' onChange={handleChange} />
        </label>
        <label>
          Name:
          <input value={inputs.instagramUrl} name='instagramUrl' onChange={handleChange} />
        </label>
        <label>
        Facebook:
          <input value={inputs.facebookUrl} name='facebookUrl' onChange={handleChange} />
        </label>
        <label>
        Web Page:
          <input value={inputs.webPage} name='webPage' onChange={handleChange} />
        </label>
        <button type='submit'>Save Changes</button>
      </form>
    </>
  );
  }
 
export default UpdateArtistPage;