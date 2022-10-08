import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from "react"

import {NaviBar} from '../Components/NaviBar'
import {host} from "../consts"


async function loginUser(credentials) {
    return fetch(host+'/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}
   

export const Login = (setToken) => {
    document.body.style.background = "#312F36";
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async evt => {
    evt.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
    return(
        <div>
            <NaviBar name="Qwizi"></NaviBar>
            <Container className="square border border-primary rounded p-3 mt-5" style={{backgroundColor: "#312F36"}} >
                <Row md={3}>
                    <Col md={4} >
                        <h3 style={{color: '#3A83F1'}}>Корпоративный портал ВТБ</h3>
                       
                    </Col>
                    <Col md={{offset:4, span:3}}>
                        <Form onSubmit={handleSubmit} className="square border border-primary rounded p-3">
                            <Form.Group className="mb-3 mt-3">
                                <Form.Control style={{backgroundColor: '#413F45'}}  type="text" placeholder="Enter username" onChange={evt => setUserName(evt.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control style={{backgroundColor: '#413F45'}} type="password" placeholder="Enter password" onChange={evt => setPassword(evt.target.value)}/>
                            </Form.Group>

                            <Form.Group className="square border border-primary rounded p-3 mb-3" style={{backgroundColor:"#3A83F1"}}>
                                <Form.Label style={{color: '#9DC1F8'}}><h5 className="center-text">SecretKey</h5></Form.Label>
                                <Form.Control style={{backgroundColor: '#9DC1F8'}} type="" placeholder="Enter password" />
                            </Form.Group>
                            <Container>
                                <Row>
                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}