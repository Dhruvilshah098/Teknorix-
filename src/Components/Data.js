import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams,  } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
import OtherJobs from './OtherJobs';

const Data = () => {
  const { id } = useParams();
  const [post, SetPost] = useState({});
  useEffect(() => {
    const fetch = async () => {

      try {
        const { data } = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs/${id}`);
        SetPost(data);
        console.error(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (

    <div classname="MainWrapper row">
          <Container className='Data-Wrapper'>
            <Row>
              {/* <button onClick={handleClick}>Go back</button> */}
              <div className="depart"><p>{post.industry} Department at Teknorix</p>
                <div className="userTitle" >{post.title}</div>
                <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{post.industry}</p>
                 {/* <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {}  */}
                 <label>{post.type}</label> </div>

                <a href={`https://jobs.teknorix.com/apply/${id}`} className="ApplyBtn">Apply</a>

              </div>

              <br></br>

              <hr className="hr"></hr>

              <Col xs={8}>

                <div className="userDescription" >
                  {post.description}
                </div>
              </Col>

              <Col xs={4} >

                <div className="OtherJob">



                  <p className='OtherJobTitle'>OTHER JOB OPENINGS</p>


                  <OtherJobs />
                  <div className="userTitle" >{post.title}</div>
                  <div className="userLocation" ><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon><p>{post.industry}</p> 
                  {/* <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><p>{post.location.title}</p>  */}
                  <label>{post.type} </label> </div>
                </div>

              </Col>
            </Row>
          </Container>
    </div>

  )
}

export default Data
