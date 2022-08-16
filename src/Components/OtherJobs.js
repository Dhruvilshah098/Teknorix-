import React from 'react'
import axios from 'axios'
// import {useHistory} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const OtherJobs = () => {
    const [post, setPost] = React.useState();
const baseURL = "https://teknorix.jobsoid.com/api/v1/jobs?limit='4'";
// const { push } = useHistory();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post);
    });
    
  }, []);

  if (!post) return null;
  return (
    <div >
         {post.map((user,key) => (
              <div  key={key}>
          {/* <p className='OtherJobTitle'>OTHER JOB OPENINGS</p> */}
          <div className="userTitle" >{user.title}</div>
                  <div className="userLocation pb-3" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{user.industry}</p> 
                  {/* <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{post.location.title}</p>  */}
                  <label>{user.type} </label> </div>

          </div>    
  ))}
        {/* <button onClick={() => push("/")}>Go back</button> */}
    </div>
  )
}

export default OtherJobs