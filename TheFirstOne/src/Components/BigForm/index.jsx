import { useState } from "react";
import "./index.css";

export default function BigForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contract, setContract] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contract,
      gender,
      selectedOption,
      subject,
      resume,
      url,
      about
    );
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContract("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="BigForm">
      <h1>Form in Rect</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label htmlFor="tel">Contract*</label>
          <input
            type="tel"
            name="contract"
            id="contract"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            placeholder="Enter Mobile Number"
            required
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label htmlFor="lang">Your best subject</label>
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subject.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subject.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subject.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label htmlFor="url">Enter Url*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Url"
            required
          />
          <label>Select Your Choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled defaultValue={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDb</option>
            </optgroup>
          </select>
          <label htmlFor="About">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}
