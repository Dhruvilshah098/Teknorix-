import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Data () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
      };
  const { id } = useParams();

  // const [post, SetPost] = useState({});
  // useEffect(() => {
  //   const fetch = async () => {
      
  //     try {
  //       const { data } = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs/${id}`);
  //       SetPost(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetch();
  // }, []);

  const [post, setPost] = React.useState();
    const [query, setQuery] = useState("")
    const baseURL = `https://teknorix.jobsoid.com/api/v1/jobs/${id}`;

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
        console.log(post);
      });
      
  }, []);

  if (!post) return null;
  return (

   
    <div classname="MainWrapper row">
          
          {post.filter(user => {
        if (query === "") {
          return user;
        } else if (user.title.toLowerCase().includes(query.toLowerCase())) {
          return user;
        }
        }).map((user,key) => (
                <div  key={key}>
            
          <Container className='Data-Wrapper'>
        <Row>
        <button onClick={handleClick}>Go back</button>
          {/* <div className="userTitle" >{user.id}</div> */}
      <div className="depart"><p>{post.industry} Department at Teknorix</p> 
              <div className="userTitle" >{post.title}</div>
          <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{post.industry}</p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{post.location.title}</p> <label>full time </label> </div>

          <a href="https://jobs.teknorix.com/apply/41863?source=Website" className="ApplyBtn">Apply</a>      
      
          </div>
          
      <br></br>
          <hr className="hr"></hr>
          <Col xs={8}>
        
          <div className="userDescription" >
            {post.description}</div>
          </Col>

          <Col xs={4} >

      <div className="OtherJob">
      <p className='OtherJobTitle'>OTHER JOB OPENINGS</p>
      <div className="userTitle" >{post.title}</div>
        <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{post.industry}</p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{post.location.title}</p> <label>full time </label> </div>
        
      </div>
          
      </Col>
        </Row>
        </Container>    
        </div>
)

 )
}
</div>
  )
}

export default Data;




