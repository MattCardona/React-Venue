import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12677.833041863083!2d-121.9694113!3d37.402642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11455a372e1f7d18!2sLevi&#39;s+Stadium!5e0!3m2!1sen!2sus!4v1544721695421"
        width="100%" 
        height="510px" 
        frameBorder="0" 
        allowFullScreen
        title="Levi Stadium"
      >
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
};

export default Location;