import React, { useState } from 'react';
import { addUser } from '../axios/api'; // Import addUser function from api.js

function Form() {
  const [userName, setUserName] = useState("");
  const [userDOB, setUserDOB] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userUniversity, setUserUniversity] = useState("");
  const [userMarks, setUserMarks] = useState("");
  const [userJobTitle, setUserJobTitle] = useState("");

  const handleUserSubmit = async () => {
    if (!userName || !userEmail) return alert("Please Enter User Name and Email");

    try {
      await addUser({
        name: userName,
        dob: userDOB,
        mobile: userMobile,
        email: userEmail,
        university: userUniversity,
        marks: userMarks,
        job_title: userJobTitle
      });
      // Reset form fields after successful submission
      setUserName("");
      setUserDOB("");
      setUserMobile("");
      setUserEmail("");
      setUserUniversity("");
      setUserMarks("");
      setUserJobTitle("");
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <>
      <h1 class="text-2xl font-extrabold text-gray-900 dark:text-dark md:text-4xl lg:text-5xl text-center my-10 mb-10"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Addval Labs</span> HireQuest.</h1>

      {/* <label for="price" className="block text-sm font-medium leading-6 text-center text-gray-900">Email Address</label> */}
      <div className="flex justify-center relative mt-2 rounded-md shadow-sm">
        {/* <div className ="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className ="text-gray-500 sm:text-sm"><FontAwesomeIcon icon={faEnvelope} /></span>
          </div> */}

        {/* Name */}
        <input type="text" name="name" id="name" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Name" value={userName} onChange={(e) => setUserName(e.target.value)} />

        {/* DOB */}
        <input type="date" name="dob" id="dob" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter DOB" value={userDOB} onChange={(e) => setUserDOB(e.target.value)} />
      </div>

      <div className="flex justify-center relative mt-2 rounded-md shadow-sm">
        {/* Mobile number */}
        <input type="text" name="mobile" id="mobile" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Email Address" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} />

        {/* Email */}
        <input type="email" name="email" id="email" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Email Address" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

      </div>
      <div className="flex justify-center relative mt-2 rounded-md shadow-sm">
        {/* university */}
        <input type="text" name="university" id="university" className="block w-3/12 rounded-md mx-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter University Name" value={userUniversity} onChange={(e) => setUserUniversity(e.target.value)} />

        {/* marks */}
        <input type="number" name="marks" id="marks" className="block w-3/12 rounded-md border-0  mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Total Marks" value={userMarks} onChange={(e) => setUserMarks(e.target.value)} />

      </div>

      <div className="flex justify-center relative mt-2 rounded-md shadow-sm">

        {/* job title */}
        <input type="text" name="jobTitle" id="jobTitle" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Job Title" value={userJobTitle} onChange={(e) => setUserJobTitle(e.target.value)} />
      </div>


      <div className="flex justify-center relative mt-2 rounded-md shadow-sm">

        <button className="relative inline-flex items-center justify-center p-0.5 mx-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-dark focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={() => {
          handleUserSubmit();
        }} >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>

      </div>
    </>
  );
}

export default Form;
