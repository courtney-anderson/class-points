import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'
import Profile from './Profile'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '../apis/profile'
import { useProfiles } from '../hooks/useProfiles.ts'
import { Route, Routes, Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  //Pete - call useQuery/useProfiles hook to get all student profiles by calling API getProfiles function

  return (
    <>
      <div className="tile-top"></div>
      <div className="content">
        <Heading />
        <Nav />
        <Outlet />
      </div>
      <div className="tile-bottom"></div>
    </>
  )
}
export default App
