import React, { useState } from "react";
import "./App.css";
import axios from 'axios'

import { Button, Modal, Row, Col, Container } from "react-bootstrap";


function App() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [categories, setCategories] = useState(null)

	const apiURL  ="https://api.chucknorris.io/jokes/categories"

	const fetchData = async () => {
		const response = await axios.get(apiURL)

		setCategories(response.data)
		
		
	}



  return (
    <div className="container mt-4 mb-4">
      <div className="mt-3">
        <h3>Random Chuck Norris Jokes</h3>
        <Button variant="primary" onClick={fetchData} className="mt-3">
              Get categories
            </Button>
      </div>
      <Container>
        <Row>
        {categories && 
        	categories.map((category, index) => {
        	return(
        	 <Col sm={4} key={index}>
            <Button variant="primary" onClick={handleShow} className="mt-2 p-3 button ">
              {category}
            </Button>
          </Col>
        	)
        })}
         
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Category Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>Category fact</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
