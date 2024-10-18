// import {useEffect} from 'react'

import {useLoaderData} from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();
    console.log(data)
    // useEffect(() => {
    //   fetch('https://github.com/Sonali-Kanawade', {
    //     mode: 'no-cors',
    //     headers: {
    //       'Access-Control-Allow-Origin':'*'
    //     }
    //   }).then(res => console.log(res))
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default GitHub;

// eslint-disable-next-line react-refresh/only-export-components
export const gitHubInfoLoader = async() => {
    // const response = await fetch('https://github.com/Sonali-Kanawade', {
    //     mode: 'no-cors',
    //     headers: {
    //       'Access-Control-Allow-Origin':'*'
    //     }
    //   });

    //   return response
    const response = await fetch('https://api.github.com/users/Sonali-Kanawade')
    return response.json()
}