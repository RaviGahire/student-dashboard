import React from "react";
import { Component } from "react";

export class StudentList extends Component {
    constructor() {
        super()

this.state =[
  { "name": "Aarav Mehta", "rollNo": "101", "course": "ReactJS", "batch": "10-12 AM" },
  { "name": "Riya Sharma", "rollNo": "102", "course": "NodeJS", "batch": "12-3 PM" },
  { "name": "Rohit Patil", "rollNo": "103", "course": "Bootstrap", "batch": "2:30-4:30 PM" },
  { "name": "Neha Kulkarni", "rollNo": "104", "course": "JavaScript", "batch": "5-6 PM" }
]



    }

    render() {
        return (
            <>
                <h1 >Student List </h1>
            </>
        )
    }


}