import React from 'react'
import { Link } from 'react-router-dom';

const Courses = ({ courseList }) => {
    return (
        <div>
            <h2>Available Courses</h2>
            <p>{JSON.stringify(courseList)}</p>

            <ul className='List-unstyled'>
                {courseList.map(course => (
                    <li key={course.id}>
                        <Link to={`${course.id}`}>{course.name}</Link>
                        </li>
                ))}
            </ul>
            {/* Outlet component used to indicate where you want new stuff rendered based on nested routse that build off of this Courses component */}
            <Outlet />
        </div>
    )
}

export default Courses;