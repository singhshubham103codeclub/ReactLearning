import React, { useState , useEffect} from 'react';
import axios from 'axios';
const App = () => {
  const [userdata, setUserData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  let printuserData = 'no user found'
  if (userdata.length > 0) {
    printuserData = userdata.map(function (obj, index) {
      return <div>
        <div className='h-full bg-white rounded-2xl'>
          <img src={obj.download_url} alt={obj.author} className='h-full w-full object-cover' />
        </div>
        <h2 className='font-bold text-lg'>{obj.author}</h2>
      </div>
    })
  }
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    setUserData(response.data)
    console.log(userdata)
  };
  return (

    <div className='bg-black h-screen text-white overflow-auto'>
      <button onClick={getData} className='bg-green-600 active:scale-95 mb-4 px-5 py-2 rounded text-white'>
        get-data
      </button>
      <div className=''>{printuserData}</div>
    </div>
  )
}
export default App