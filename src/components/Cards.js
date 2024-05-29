import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const[likedCourses, setLikedCourses] = useState([]);



  function getCourses() {
    if(category === "All"){
        let allCourses = [];
        // Sara Object ko All Courses wala array ke ander store kar diya kyuki map() lagane ko easy hoga 
    
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
            allCourses.push(courseData);
          })
        })
        return allCourses;
    }else{
      // mai sirf specific category ka data pass karunga 
      return courses[category];
    }
    
  }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
        getCourses().map((course) => (
          <Card key={course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>
        ))
       }
    </div>
  )
}

export default Cards
