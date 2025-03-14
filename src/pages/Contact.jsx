import React from 'react';
const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData=Object.fromEntries(formData.entries());
    console.log(formInputData);
};

export const Contact = () => {
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
      <div className="contact-wrapper container">

    
      <form action={handleFormSubmit}>
        <input 
          type="text"
          required
           className='form-control'
          autoComplete="off"
          placeholder="Enter Your Name"
          name="username"
        />
        <input 
          type="email"
          required
           className='form-control'
          autoComplete="off"
          placeholder="Enter Your Email"
          name="email"
        />
        <textarea 
        className='form-control'
          name="message"
          required
          placeholder="Enter Your Message">  </textarea>
        <button type='submit' value='send'>Send</button>
      </form>
      </div>
    </section>
  );
};
