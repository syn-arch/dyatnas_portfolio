import React from "react";

function Contact(props) {
  return (
    <div className="w-11/12 mx-auto">
      <h1
        className="text-2xl font-bold mt-12 relative text-gray-800
        after:content-['']
        after:ml-4
        after:inline-block
        after:border-b-2
        after:border-b-black
        after:w-28
        after:absolute
        after:top-4
        "
      >
        Contact
      </h1>
      <div className="bg-white mt-4 p-4 shadow rounded"></div>
      <div className="h-10"></div>
    </div>
  );
}

export default Contact;
