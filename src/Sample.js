import React from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Sample = () => {
  const { id } = useParams();
//   // const { push } = useHistory();
//   const [post, SetPost] = useState({});
//   const [query, setQuery] = useState("")
  

  
      const [post, setPost] = React.useState();
      const [query, setQuery] = useState("")
      const baseURL = "https://teknorix.jobsoid.com/api/v1/jobs/";
  
      React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(post);
        });
        
    }, []);
  
    if (!post) return null;
    
    
    return (
        
      <div Classname="MainWrapper row">
          
          {/* <input placeholder="Enter Post Title" value={query} onChange={event => setQuery(event.target.value)}/> */}
          {post.filter(user => {
      if (query === "") {
        //if query is empty
        return user;
      } else if (user.title.toLowerCase().includes(query.toLowerCase())) {
        //returns filtered array
        return user;
      }
    }).map((user,key) => (
              <div  key={key}>
          
          <Container className='Data-Wrapper'>
        <Row>
          
          {/* <div className="userTitle" >{user.id}</div> */}
  <div className="depart"><p>{user.industry} Department at Teknorix</p> 
              <div className="userTitle" >{user.title}</div>
          <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{user.industry}</p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{user.location.title}</p> <label>full time </label> </div>

          <a href="https://jobs.teknorix.com/apply/41863?source=Website" className="ApplyBtn">Apply</a>      
       
          </div>
<br></br>
          <hr class="hr"></hr>
          <Col xs={8}>
         
          <div className="userDescription" >
            {user.description}</div>
          </Col>
  
          <Col xs={4} >
  
  <div className="OtherJob">
    <p className='OtherJobTitle'>OTHER JOB OPENINGS</p>
    <div className="userTitle" >{user.title}</div>
        <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{user.industry}</p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{user.location.title}</p> <label>full time </label> </div>
        
  </div>
          
      {/* <a href={'https://teknorix.jobsoid.com/api/v1/jobs/' + user.id} className="ViewBtn">View</a> */}
      </Col>
        </Row>
        </Container>    
          </div>
  
          
        ))}
  
      </div>
    );
  
  };

export default Sample;