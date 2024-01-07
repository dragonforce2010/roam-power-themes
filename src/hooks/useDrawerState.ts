import {useState} from 'react'

const UseDrawerState = (open: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  return { isOpen, setIsOpen }
    
}

export default UseDrawerState