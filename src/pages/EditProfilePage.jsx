import { useParams } from 'react-router-dom'

function EditProfilePage() {
      const { profileId } = useParams()
      const fetchProfile = async () => {
          try {
            const response = await fetch(`http://localhost:5005/profile/${profileId}`)
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