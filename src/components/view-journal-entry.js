import React, {Component} from 'react'

import Navbar from "./navbar"

export default class ViewPage extends Component{
    constructor() {
        super()
        this.state = {
            
        }

    }

    // componentDidMount(){
    //     fetch("https://journal-time-api-octclass.herokuapp.com/journal/get")
    // }
    

    render(){
        return(
            <div className="page-wrapper">
                <Navbar/>
                <div className="entry-wrapper">
                    <div className="title">

                    </div>
                    <div className="date">

                    </div>
                    <div className="location">

                    </div>
                    <div className="description">

                    </div>
                    <div className="people">

                    </div>
                </div>
            </div>
                
            
        )
    }

}