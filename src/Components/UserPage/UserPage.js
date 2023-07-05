import React from 'react';
import items from '../../Utilities/constant';
import CourseList from '../Course/CourseList'

function UsersPage() {
  return (
    <div>
       <h1>User Page</h1>
       
       <CourseList items={items} />
    </div>
  );
}

export default UsersPage;
