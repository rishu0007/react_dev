/* eslint-disable no-unused-vars */

import UserContextProvider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Rishu</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
