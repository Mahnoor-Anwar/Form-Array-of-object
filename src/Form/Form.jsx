import React, { useState } from "react";
import style from "./Form.module.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegForm = () => {
  const [registeredData, setRegisteredData] = useState([]);
  const [data, setData] = useState({
    fullname: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    education: "",
    designation: "",
  });

  const handleFullnameChange = (e) => {
    setData({
      ...data,
      fullname: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    setData({
      ...data,
      age: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handleGenderChange = (e) => {
    setData({
      ...data,
      gender: e.target.value,
    });
  };
  const handleEducationChange = (e) => {
    setData({
      ...data,
      education: e.target.value,
    });
  };
  const handleDesignationChange = (e) => {
    setData({
      ...data,
      designation: e.target.value,
    });
  };
  const handlePhonenumberChange = (e) => {
    setData({
      ...data,
      phoneNumber: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisteredData([...registeredData, data]);
    setData({
      fullname: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      education: "",
      designation: "",
    });
  };
  return (
    <>
      <h1 className="text-center">Registration Form</h1>
      <div className={style.container}>
        <form action="" onSubmit={handleSubmit}>
          <div className={style.input}>
            <input
              value={data.fullname}
              type="text"
              onChange={handleFullnameChange}
              placeholder="Fullname"
              className={style.input}
            />
          </div>
          <div className={style.input}>
            <input
              value={data.age}
              type="text"
              onChange={handleAgeChange}
              placeholder="Age"
              className={style.input}
            />
          </div>
          <div className={style.selectWrapper}>
            <select
              onChange={handleGenderChange}
              value={data.gender}
              className={style.select}
            >
              <option value="">Select Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className={style.input}>
            <input
              value={data.email}
              type="email"
              onChange={handleEmailChange}
              placeholder="Email"
              className={style.input}
            />
          </div>
          <div className={style.input}>
            <input
              value={data.phoneNumber}
              type="text"
              onChange={handlePhonenumberChange}
              placeholder="Phone Number"
              className={style.input}
            />
          </div>
          <div className={style.input}>
            <input
              value={data.education}
              type="text"
              onChange={handleEducationChange}
              placeholder="Education"
              className={style.input}
            />
          </div>
          <div className={style.input}>
            <input
              value={data.designation}
              type="text"
              onChange={handleDesignationChange}
              placeholder="Designation"
              className={style.input}
            />
          </div>
          <div className=" d-flex mt-5">
          <Form.Check aria-label="option 1" />
          <p className="ms-2 text-start">
            I agree to the terms and conditions outlined by the service
            provider<br></br>
            activity that may be harmful to other users or the service itself.
            By <br></br>agreeing to these terms, I acknowledge that I have read and<br></br>
            understood the conditions set forth, and I consent to be<br></br> bound by
            them. 
          </p>
          </div>
          <Button className={style.submit} type="submit">
            submit
          </Button>
          <div>
         
          </div>
         
        </form>
      </div>
      <div className={style.tableContainer}>
      {registeredData.length > 0 && (
        <Table striped>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Education</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {registeredData.map((data, index) => (
              <tr key={index}>
                <td>{data.fullname}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.education}</td>
                <td>{data.designation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>
    </>
  );
};

export default RegForm;
