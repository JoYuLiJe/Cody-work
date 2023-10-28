import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    // use useParams hook to get the parameter from
    // the path that was used to access this component
    const { courseId } = useParams();

    return(
        <div>
            <h3>Course Details</h3>

            <h4>Course ID: </h4>
            <h4> Course Name: </h4>
            <h4>Course Description: </h4>
        </div>
    )
}

export default CourseDetails; 