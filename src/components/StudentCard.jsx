import React from "react";

export const StudentCard = (props) => {
    return (

        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1550px] mx-auto">

            {props.student.map((val, index) => (
                <div key={index}

                    className="p-2 flex gap-2 items-center flex-col sm:flex-row border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <img
                        src={val.img}
                        alt={val.name}
                        style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'cover', height: '100px', width: "100px", borderRadius: '50%' }}
                    />
                    <h2 className="text-xl font-bold mb-2">{val.name}</h2>
                    <p className="text-gray-700 mb-1 flex ">
                        <span className="font-semibold ">Roll No:</span> {val.rollNo}
                    </p>
                    <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Course:</span> {val.course}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Batch:</span> {val.batch}
                    </p>
                </div>
            ))}
        </div>


    );
};
