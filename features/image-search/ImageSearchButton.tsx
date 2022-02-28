import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { clearQueryAfterDelay } from './imageSearchSlice'

export default function SearchBar() {
  const dispatch = useDispatch()

  function onClick() {
    // execute thunk
    // wait 1 sec and clear query
    dispatch(clearQueryAfterDelay(1000))
    return console.log('click')
  }

  return <Button onClick={onClick}>Search</Button>
}
