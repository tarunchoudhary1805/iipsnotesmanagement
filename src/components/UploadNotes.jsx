import React, { useState } from "react";

const UploadNotes = () => {
  const [courses, setCourses] = useState([
    "MCA (5 years)",
    "M.TECH (IT) (5 YEARS)",
    "B.COM (HONS) (3 YEARS)",
    "MBA (TOURISM) (5 YEARS)",
    "MBA (MS) (2 YEARS)",
    "MBA (TA) (2 YEARS)",
    "MBA (APR) (2 YEARS)",
    "MBA (ENTERPRENEURSHIP) (2 YEARS)",
  ]);
  const [data, setData] = useState({
    course: "",
    year: "",
    semester: "",
    subject: "",
    subjectCode: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);

  const submit = () => {
    console.log(data);
  };
  return (
    <div className="container border">
      <div className="d-flex justify-content-center pt-5">
        <h3 className="head">Upload Notes</h3>
      </div>
      <div className="register-page">
        <form className="w-100">
          <div className="form-group">
            <label className="">Select Course</label>

            <select
              className="form-control"
              name="course"
              onChange={handleChange}
              value={data.course}
            >
              {courses.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </div>
          <br />
          <div className="from-group">
            <label className="">Enter Year :</label>
            <input
              type="number"
              className="form-control"
              required
              name="year"
              value={data.year}
              onChange={handleChange}
              placeholder="E.g. 1 , 2 , 3 , 4 , 5"
            />
          </div>
          <br />
          <div className="from-group">
            <label className="">Enter Semester :</label>
            <input
              type="number"
              className="form-control"
              required
              name="semester"
              value={data.semester}
              onChange={handleChange}
              placeholder="E.g. 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10"
            />
          </div>
          <br />
          <div className="from-group">
            <label className="">Enter Subject Name:</label>
            <input
              type="text"
              className="form-control"
              required
              name="subject"
              value={data.subject}
              onChange={handleChange}
              placeholder="E.g. DISCRETE MATHEMATICS , DATABASE MANAGEMENT SYSTEM "
            />
          </div>
          <br />
          <div className="from-group">
            <label className="">Enter Subject Code:</label>
            <input
              type="text"
              className="form-control"
              required
              name="subjectCode"
              value={data.subjectCode}
              onChange={handleChange}
              placeholder="E.g. IC-101A , IC-101B"
            />
          </div>
          <br />
          <div className="from-group">
            <label className="">Upload File :</label>
            <input
              type="file"
              id="input-file"
              required
              name="file"
              value={data.file}
              onChange={handleChange}
              placeholder="E.g. IC-101A , IC-101B"
            />
            <br />
            <label class="btn-upload" for="input-file" role="button">
              Upload File
            </label>
          </div>
          <br />
          <div className="w-100 text-center">
            <button
              class="btn text-white btn-upload bg-primary w-50"
              onClick={submit}
              for="input-file"
              role="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNotes;
