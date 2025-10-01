import React from "react";
import defaultProfile from "../assets/defaultprofile.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Pau Jorba",
      role: "Fullstack Developer",
      location: "Barcelona, Spain",
      bio: "I'm a passionate Fullstack Developer with a focus on creating scalable and user-friendly applications. I love problem-solving, clean code, and bringing ideas to life through technology.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "TailwindCSS",
        "Git",
      ],
      interests: [
        "Web Development",
        "Open Source",
        "UI/UX Design",
        "Traveling",
        "Cycling",
      ],
      email: "paujorba.dev@gmail.com",
      github: "https://github.com/paujorbaa/",
      linkedin: "https://www.linkedin.com/in/pau-jorba-5a0259382/",
      image: defaultProfile,
    },
    {
      id: 2,
      name: "Yanqing",
      role: "Fullstack Developer",
      location: "Madrid, Spain",
      bio: "I'm a Fullstack Developer in training with 10 years of business experience. I focus on building scalable, user-friendly applications and believe that code without real value should not persist.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "TailwindCSS",
        "Git",
      ],
      interests: [
        "Web Development",
        "Open Source",
        "UI/UX Design",
        "Traveling",
        "Cycling",
      ],
      email: "yang.yanqing@tutamail.com",
      github: "https://github.com/Yang-Yanqing",
      linkedin: "https://www.linkedin.com/in/yanqing-yang-berlin/",
      image: defaultProfile,
    },
  ];

  return (
    <div className="container py-5" style={{ maxWidth: 960 }}>
      <h1 className="mb-4 text-center">About this project</h1>
      <p className="lead text-center mb-5">
        This project is part of our Web Development Bootcamp. It aims to
        demonstrate our skills in React, Routing, and building user-friendly
        interfaces. An important step toward becoming full-stack engineers –
        let's go!
      </p>

      <h2 className="text-center mb-4">Meet the team</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {teamMembers.map((member) => (
          <li
            key={member.id}
            style={{
              marginBottom: "1.5rem",
              padding: "1.5rem",
              border: "1px solid #ccc",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={member.image}
              alt="Picture of the developers"
              className="dev-image"
            />
            <h3>{member.name}</h3>
            <p>
              <strong>{member.role}</strong> – {member.location}
            </p>
            <p>{member.bio}</p>

            <h4>Skills:</h4>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                padding: 0,
                listStyle: "none",
              }}
            >
              {member.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    background: "#f4f4f4",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>

            <h4>Interests:</h4>
            <p>{member.interests.join(", ")}</p>

            <h4>Contact:</h4>
            <p>
              📧 <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>

            <p>
              🔗
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "0.5rem", marginRight: "1rem" }}
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
};

export default AboutPage;
