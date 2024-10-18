import {useEffect} from 'react'

function GitHub() {
    useEffect(() => {
      fetch('https://github.com/Sonali-Kanawade', {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(res => console.log(res))
    }, [])
    
  return (
    <div className='text-center m-4 bg-indigo-700'>Git Hub followers:</div>
  )
}

export default GitHub