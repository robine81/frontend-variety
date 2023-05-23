import { useParams } from 'react-router-dom'

function EditProfilePage() {
      const { profileId } = useParams()
      const fetchProfile = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/profile/${profileId}`)
            if (response.status === 200) {
              const parsed = await response.json()
              setProfile(parsed)
            }
          }
          catch(err){
            console.err(err)
          }
        }
      
      
        useEffect(() => {
          fetchProfile()
        },[profileId]) 
    return (
      <div>EditProfilePage</div>
    )
  }
  
  export default EditProfilePage