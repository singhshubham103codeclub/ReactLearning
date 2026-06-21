import react from "react";
import { Bookmark } from 'lucide-react'
const Card = (job) => {
  // console.log(job)
return (
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
      <h3>{job.company}<span> {job.daysAgo} days ago</span></h3>
      <h2>{job.title}</h2>
      <div className="skills">
        <span>{job.skills[0]}</span>
        <span>{job.skills[1]}</span>
        <span>{job.skills[2]}</span>
      </div>
      <div className="job-type">
        <h4>{job.jobType}</h4>
        <h4>{job.level}</h4>
      </div>
    </div>
    <div className="bottom">
      <button>Apply Now</button>
      <div>
        <h3>{job.salary}</h3>
        <p>{job.location}</p>
      </div>
    </div>
  </div>
)
}
export default Card