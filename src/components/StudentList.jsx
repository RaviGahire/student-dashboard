import React from "react";
import { Component } from "react";

export class StudentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {
                    id: 1,
                    name: "Amit Sharma",
                    rollNo: "101",
                    course: "Computer Science",
                    batch: "2023-2027",
                    email: "amit.sharma@example.com",
                    phone: "+91 9876543210",
                    address: {
                        city: "Mumbai"
                    },
                    percentage: 85,
                    attendance: "92%",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34ye8xdFsttmKarHLy0_F4qqw9KZcVEQDpA&s'
                },
                {
                    id: 2,
                    name: "Priya Verma",
                    rollNo: "102",
                    course: "Information Technology",
                    batch: "2022-2026",
                    email: "priya.verma@example.com",
                    phone: "+91 9123456780",
                    address: {
                        city: "Delhi"
                    },
                    percentage: 82,
                    attendance: "89%",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLe04G2shbADF7Nb9j_xg6e7DgX_SHbMbLg&s'
                },
                {
                    id: 3,
                    name: "Rahul Mehta",
                    rollNo: "103",
                    course: "Electronics",
                    batch: "2021-2025",
                    email: "rahul.mehta@example.com",
                    phone: "+91 9988776655",
                    address: {
                        city: "Pune"
                    },
                    percentage: 88,
                    attendance: "95%",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeyLXtQN3apJlp2XVHGzTlQxEVyLKjPiSBw&s'
                },
                {
                    id: 4,
                    name: "Sneha Iyer",
                    rollNo: "104",
                    course: "Mechanical Engineering",
                    batch: "2024-2028",
                    email: "sneha.iyer@example.com",
                    phone: "+91 9012345678",
                    address: {
                        city: "Chennai"
                    },
                    percentage: 79,
                    attendance: "87%",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAtw-xLg4cnDxNKqzJ8AT7QT7ejZ8KJOt2A&s'
                }
            ]
        }


    }
    render() {
        return (
            <>
                {/* data from props  */}
                {
                    this.props.student.map((val, index) => {

                        return (
                            <>
                                <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex justify-around" >
                                    <div className="flex flex-col items-center pb-10  ">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={val.img} alt="Bonnie image" />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{val.name}</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Roll:{val.rollNo}</span>
                                        <div className="flex mt-4 md:mt-6">
                                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{val.batch}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.course}</a>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )

                    })
                }

                {/* data from internal state */}
                {
                    this.state.students.map((val, i) => {
                        return (
                            <>
                            
                                <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex justify-around" >
                                    <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={val.img} alt="Bonnie image" />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{val.name}</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Roll:{val.rollNo}</span>
                                        <div className="flex mt-4 md:mt-6 flex-wrap gap-1">
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.course}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.batch}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.email}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.phone}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.phone}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val.address.city}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">percentage {val.percentage}</a>
                                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Attendance {val.attendance}</a>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )



                    })
                }




            </>
        )
    }


}