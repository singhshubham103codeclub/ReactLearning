import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top-left">
          <img
            src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg"
            alt="Icon"
          />
           <button>save
          <Bookmark size={10} color="black" />
        </button>
        </div>
        <div className="center">
          <h3>Amazone<span> 5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
        </div>
        <h4>Part time</h4>
        <h4>Senior Level</h4>
        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App