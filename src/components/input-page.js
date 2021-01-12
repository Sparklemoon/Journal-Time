import React, { Component } from 'react'

import Navbar from "./navbar"
import Cookies from "js-cookie"


export default class AddEntry extends Component {
    constructor() {
        super ()

        this.state = {
            title: "",
            location: "",
            description: "",
            person: "",
            date: "",
            user: "",
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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


    handleSubmit(event) {
        event.preventDefault()

        fetch("https://journal-time-api-octclass.herokuapp.com/journal/add", {
            method: "POST",
            headers: { "content-type":"application/json"},
            body: JSON.stringify({
                person: this.state.person,
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
                location: this.state.location
                
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data == "Data added successfully") {
                // this.props.history.push("/")
            }                           
            else {
                this.setState({ error: true })
            }
            console.log(data)
        })
        .catch(error => {
            console.log("Error creating entry: ", error)
            this.setState({ error: true })
        })   
    }
    
    render() {
        
        return (
            <div className="body-wrapper">
                <div className="form-wrapper">
                    <Navbar/>
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
                            {console.log(this.state.title)}
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
                            {console.log(this.state.location)}
                        </div>

                        <div className="input-wrapper">
                            Date:
                            <input
                                type="text"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                placeholder="Date"
                            />
                            {console.log(this.state.date)}
                        </div>

                        <div className="input-wrapper">
                            Add a person:
                            <input
                                type="text"
                                name="person"
                                value={this.state.person}
                                onChange={this.handleChange}
                                placeholder="People to remember"
                            />
                            <button>Add</button><br/>
                            People added: (List of people added) 
                            {console.log(this.state.person)}
                            
                        </div>
                                                
                        <div className="textarea-wrapper">
                            Description: 
                            <textarea
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                placeholder="Description or story"
                            />
                            {console.log(this.state.description)}
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