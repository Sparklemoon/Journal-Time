import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Button, Container, Col, Row } from 'react-bootstrap';

export default class ViewPage extends Component{
    constructor() {
        super()
        this.state = {
            title: "TITLE",
            photo: "PHOTO",
            location: "LOCATION",
            description: "",
            people:"PEOPLE"
        }

    }

    componentDidMount(){
        fetch("https://journal-time-api-octclass.herokuapp.com/journal/get")
    }
    

    render(){
        return(
            <Container fluid className="view-page-container">
                <Row className="Row">
                    {this.state.title}
                </Row>
                <Row className="Row">
                    <Col className="Col">
                      {this.state.photo}
                    </Col>
                    <Col className="Col">
                       {this.state.photo}
                    </Col>
                    <Col className="Col">
                       {this.state.photo}
                    </Col>
                </Row >
                <Row className="Row">
                   {this.state.location}
                </Row>
                <Row className="Row" style={{
                    height:'28vh'
                }}>
                   {this.state.description}
                </Row>
                <Row className="Row">
                   {this.state.people}
                </Row>
            </Container>
                
            
        )
    }

}