import React from "react";

function Contact() {
  const config = {
    email: "niveshhraj212004@gmail.com",
    phone: "6380519369",
  };
  return (
    <>
      <section
        id="contact"
        className="flex flex-col px-5 py-32 text-white bg-black font-montserrat"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold border-secondary">
            Contact
          </h1>
          <p className="leading-7 ">
            If you want to discuss more in detail, Contact me
          </p>
          <p className="py-2">
            <span className="font-bold">Email: </span>
            {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone: </span>
            {config.phone}
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
