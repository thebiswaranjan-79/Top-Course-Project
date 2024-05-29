import React from 'react'
import Card from './Card'

const Cards = (props) => {
  let courses = props.courses;

  function getCourses() {
    let allCourses = [];
    // Sara Object ko All Courses wala array ke ander store kar diya kyuki map() lagane ko easy hoga 
    
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
  }
  return (
    <div>
      
    </div>
  )
}

export default Cards
