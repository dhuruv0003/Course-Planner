import React from "react";
import Card from "./Card"
export default function Cards(courses) {

    //The data within the api courses is in key value pairs. where object is courses. and kays are (business,design development ,....) theses are coursse category. Now  but we want only values (array of elements of the keys/object
    //get courses is a funtion that retur an array of all the values in api

    const allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
           courseCategory.forEach((course)=>{
            allCourses.push(course)
           })
        })
        return allCourses;
    }
// getCourses=[ {description : "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.", id : "MK101" image : {url: 'https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png', alt: 'Introduction to Marketing'}  title : "Introduction to Marketing"},{},{},{}.......]

    return (
        <div className="">
            {getCourses().map((course)=>{
                <Card course={course}></Card>
            })}
        </div>
       
    )
}