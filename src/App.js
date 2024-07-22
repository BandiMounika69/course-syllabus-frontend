import React, { useState } from 'react';
import DownloadSyllabusButton from './components/DownloadSyllabusButton';
import './App.css'

function App() {
  const [id,setId] = useState("course1");

  return (
    <div>
      <h1>Download Course</h1>
      <select onChange={(e)=>setId(e.target.value)}>
      <option>Select Courses Here....</option>
      <option value="course1">Course 1</option>
      <option value="course2">Course 2</option>
      <option value="course2">Course 2</option>
      <option value="course3">Course 3</option>
      <option value="course4">Course 4</option>
      <option value="course5">Course 5</option>
      <option value="course6">Course 6</option>
      <option value="course7">Course 7</option>
      <option value="course8">Course 8</option>
      <option value="course9">Course 9</option>
      <option value="course10">Course 10</option>
      </select>
      <DownloadSyllabusButton courseId={id} />
    </div>
  );
}

export default App;
