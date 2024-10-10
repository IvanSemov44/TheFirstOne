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
    phisics: false,
  });

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
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
            id="english"
            checked={subject.english === true}
            onChange={(e)=>handleSubjectChange("maths")}
          />
          Maths
          
        </form>
      </fieldset>
    </div>
  );
}
