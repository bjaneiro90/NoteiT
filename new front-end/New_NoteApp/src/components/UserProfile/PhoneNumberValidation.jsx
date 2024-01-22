import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'



function PhoneNumberValidation() {

    const [PhoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(true)

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    };

    const validatePhoneNumber = (phoneNumber) => {
        const PhoneNumberPattern = /^\d{12}$/
        return PhoneNumberPattern.test(phoneNumber)
    }


  return (
    <div className="form-group">
              <PhoneInput 
              country={'pt'}
              international
              containerStyle={{
                borderRadius: ""
              }}
              className="input-phone-number" 
              inputStyle={{
                borderStyle: "none none solid none",
                borderRadius: "none",
                borderColor: "goldenrod",
                width: "100%",
                color: "black"
              }}
              flagButtonStyle={{color: "white"}}
              inputProps={{required : true}}
              value={PhoneNumber} 
              onChange={handleChange} 
              placeholder="mobile" />
              {!valid && <p style={{fontSize: "8px", color: "red", marginTop: "none"}}>Please enter a valid 9-digit phone number </p>}
    </div>
  )
}

export default PhoneNumberValidation