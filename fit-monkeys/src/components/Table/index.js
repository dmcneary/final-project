import React from "react";
import "./Table.css";


function ActsTable(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>

                    {/* <th scope="col">#</th> */}
                    <th scope="col">Sport</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Duration</th>

                </tr>
            </thead>

            <tbody>
                {props.activities.map(activity => (
                    <tr key={activity._id}>
                        {/* < a href={"/activities/" + activity._id} > */}
                        {/* {activity.sport}
                                {activity.date}
                                {activity.time}
                                {activity.description}
                                {activity.distance}
                                {activity.duration}

 */}

                        {/* <th scope="row">1</th> */}
                        <td>Sport: {activity.sport}</td>
                        <td>Date: {activity.date}</td>
                        <td>Time: {activity.time}</td>
                        <td>Title: {activity.title}</td>
                        <td>Description: {activity.description}</td>
                        <td>Distance: {activity.distance}</td>
                        <td>Duration: {activity.duration}</td>
                        {/* </a> */}
                    </tr>
                    
                    
                ))}
            </tbody>

        </table>
    );
}

export default ActsTable;