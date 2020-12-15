import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { Button, Modal, Row, Col, Container } from "react-bootstrap";


function App() {
	const [categories, setCategories] = useState()
	const [currentCategory, setCurrentCategory] = useState()
	const [currentCategoryContent, setCurrentCategoryContent] = useState();

	const [show, setShow] = useState(false);

	
	const handleShow = (category) => {
		setShow(true)
		setCurrentCategory(category)
		
	};

	const apiURL  ="https://api.chucknorris.io/jokes/categories"

	const fetchData = async () => {
		const response = await axios.get(apiURL)

		setCategories(response.data)
		
	}

	useEffect(async() => {
		if(currentCategory){
			const response = await axios.get('https://api.chucknorris.io/jokes/random?category='+currentCategory);

			if(response && response.data){
				console.log('returned data', response.data)
				setCurrentCategoryContent(response.data)
			}
		}
	}, [currentCategory])

	const handleClose = () => {
		setShow(false);
		setCurrentCategory(null)
		setCurrentCategoryContent(null)
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
            <Button variant="primary" onClick={()=>handleShow(category)} className="mt-2 p-3 button ">
              {category}
            </Button>
          </Col>
        	)
        })}
         
        </Row>
      </Container>

      <Modal show={show} onClick={handleClose}>
        <Modal.Header >
          <Modal.Title>{currentCategory}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{currentCategoryContent && currentCategoryContent.value} </Modal.Body>
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
