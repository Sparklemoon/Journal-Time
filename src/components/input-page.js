import React, { Component } from 'react'

// import Navbar from "../navigation/loggedIn"
import Cookies from "js-cookie"
// import Footer from "../navigation/footer"

export default class AddEntry extends Component {
    constructor() {
        super ()

        this.state = {
            title: "",
            location: "",
            description: "",
            people: "",
            user: "",
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount() {
    //     this.setState({
    //         user: Cookies.get("email")
    //     })
    // }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    // handleSubmit(event) {
    //     event.preventDefault()

        
    //     fetch("", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title: this.state.title,
    //             location: this.state.location,
    //             people: this.state.people,
    //             description: this.state.description,
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data == "Entry added successfully") {
    //             this.props.history.push("/")
    //         }                           
    //         else {
    //             this.setState({ error: true })
    //         }
    //     })
    //     .catch(error => {
    //         console.log("Error creating client: ", error)
    //         this.setState({ error: true })
    //     })   
    // }
    
    render() {
        
        return (
            <div className="body-wrapper">
                <div className="form-wrapper">
                    {/* <Navbar/> */}
                    <form onSubmit={this.handleSubmit}>
                        <h1>Add Entry</h1>
                        <div className="input-wrapper">
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Title of entry"
                            />
                        </div>

                        <div className="input-wrapper">
                            Location:
                            <input
                                type="text"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                                placeholder="Location"
                            />
                        </div>

                        <div className="input-wrapper">
                            Add a person:
                            <input
                                type="text"
                                name="people"
                                value={this.state.people}
                                onChange={this.handleChange}
                                placeholder="People to remember"
                            />
                            <button>Add</button><br/>
                            People added: (List of people added) 
                            
                        </div>
                                                
                        <div className="textarea-wrapper">
                            Description: 
                            <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                placeholder="Description or story"
                            />
                        </div>                      
                        
                        
                        <div className="add-entry-button">
                            <button type="submit">
                                Add Entry
                            </button>
                        </div>
                        
                    </form>                    
                    {/* <Footer/>                    */}
                </div>
                
            </div>
        )
    }
}