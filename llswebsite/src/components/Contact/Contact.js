import React from "react";
import "./Contact.css"; // Import CSS for styling
import Navbar from '../../navbar';
import Footer from '../../footer';
function Contact() {
  const executiveBoard = [
    {
      title: "President",
      name: "Sathvik Tamirisa",
      phone: "949-522-1454",
    },
    {
      title: "Vice-President",
      name: "Siddhartha Pelluru",
      phone: "972-743-3047",
    },
    {
      title: "Public Relations Officer",
      name: "Kousthub Ganugapati",
      phone: "469-406-9011",
    },
    {
      title: "Administrative Officer",
      name: "Ritvik Thota",
      phone: "469-971-4349",
    },
    {
      title: "Events Director",
      name: "Shishir Pammi",
      phone: "214-394-2826",
    },
    {
      title: "Fundraising Director",
      name: "Keshav Narayanan",
      phone: "214-724-6554",
    },
    {
      title: "Content Director",
      name: "Cooper May",
      phone: "512-635-4172",
    },
    {
      title: "Graphics Director",
      name: "Pranav Sankkar Ravi Shankkar",
      phone: "408-913-5078",
    },
  ];

  return (
    <div className="Contact">
        <Navbar />
      <h1 className="title">Contact Us</h1>
      <div className="board-members">
        {executiveBoard.map((member, index) => (
          <div key={index} className="member-card">
            <h3>{member.title}</h3>
            <p>Name: {member.name}</p>
            <p>Phone: {member.phone}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
