import react from 'react'
import Bookmark from 'lucide-react'
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top-left">
          {/* <img src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg" alt="Icon" /> */}
          {/* <button>🔖 Save</button> */}
        </div>
        <div className="center"></div>
        <div > <Bookmark /> </div>
      </div>
    </div>
  )
}
export default App;