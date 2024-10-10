import React, { useState } from 'react'

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("")

    const handleDrobdownOption=(event)=>{
        setSelectedOption(event.target.value)
    }

  return (
    <div>
        <label>
            Select an option:
            <select value={selectedOption} onChange={handleDrobdownOption}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </label>
        <p>
            Selected Option: {selectedOption}
        </p>
    </div>
  )
}
