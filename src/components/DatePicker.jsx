import React, { useState } from 'react'
import VendorDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DatePicker({ className = '', ...attrs }) {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <VendorDatePicker
      selected={startDate}
      onChange={setStartDate}
      className={`border-0 w-100px ${className}`}
      {...attrs}
    />
  )
}

export default DatePicker
