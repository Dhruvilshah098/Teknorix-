import React from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function SearchBox() {
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
    <div className="MainWrapper row">
    <div className="SearchFilter">

    <div className="search">
    <span className="fa fa-search"></span>
    <input placeholder="Search for Job" value={query} onChange={event => setQuery(event.target.value)}/>
  </div>
</div>
    {post.filter(user => {
      if (query === "") {
        return user;
      } else if (user.title.toLowerCase().includes(query.toLowerCase())) {
        return user;
      }
      }).map((user,key) => (
              <div  key={key}>
          
    <Container className='DataWrapper'>
        <Row className='DataContainer'>
            <Col xs={7}>

                <div className="userTitle" >{user.title}</div>
            <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{user.industry}</p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{user.location.title}</p> <label>full time </label> </div>
            </Col>

    <Col xs={5} className="BtnWrapper">


    <a href="https://jobs.teknorix.com/apply/41863?source=Website" className="ApplyBtn">Apply</a>
    <button className="ViewBtn" >View</button>
    
      </Col>
        </Row>
        </Container>    
          </div>    
  ))}

</div>
  )
}

export default SearchBox
