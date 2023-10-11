import React, { useState } from 'react'

export const useNavigation = () => {
  
    const [screen, setScreen] = useState(1)

    return {
        screen, 
        setScreen
    }
}
