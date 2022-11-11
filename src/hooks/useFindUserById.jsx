import { useState, useEffect } from 'react'

export default function useFindUserById(userID) {
  const [user, setUser] = useState({})

  useEffect(() => {
   // chamda a api
    setUser({
      name: 'Nicolas',
      email: 'nicolasteofilo@email.com',
      id: '2983792032-232323-23232das-232'
    })
  }, [])

  return { user }
}
