/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/rishu0007')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-white text-black
    p-4 text-3xl rounded-md'>Github Username : {data.login}
    <img className='rounded-md' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rishu0007')
    return response.json()
}