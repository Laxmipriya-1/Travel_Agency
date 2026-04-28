import React, { useState } from 'react'

const BookNow = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    travelers: ''
  })

  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Validation
  const validate = () => {
    let newErrors = {}

    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone is required"
    if (!formData.destination) newErrors.destination = "Destination is required"
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.travelers) newErrors.travelers = "Number of travelers required"

    return newErrors
  }

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      alert("Booking Successful 🎉")
      console.log(formData)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        date: '',
        travelers: ''
      })
      setErrors({})
    }
  }

  return (
    <div id="book now"  className='w-full min-h-screen flex justify-center items-center bg-gray-100 px-5 py-20'>
      
      <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-8 w-full max-w-xl flex flex-col gap-4'>
        
        <h1 className='text-3xl font-bold text-center mb-4'>Book Your Trip</h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}

        {/* Destination */}
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.destination && <span className='text-red-500 text-sm'>{errors.destination}</span>}

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.date && <span className='text-red-500 text-sm'>{errors.date}</span>}

        {/* Travelers */}
        <input
          type="number"
          name="travelers"
          placeholder="Number of Travelers"
          value={formData.travelers}
          onChange={handleChange}
          className='border p-3 rounded'
        />
        {errors.travelers && <span className='text-red-500 text-sm'>{errors.travelers}</span>}

        {/* Submit */}
        <button
          type="submit"
          className='bg-orange-600 hover:bg-black text-white py-3 rounded font-semibold mt-4'
        >
          Confirm Booking
        </button>

      </form>
    </div>
  )
}

export default BookNow