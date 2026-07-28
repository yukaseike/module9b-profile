import { useState } from "react";

function UserProfile({ name, bio, photoUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "320px",
    margin: "80px auto",
    padding: "24px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
    transform: isHovered ? "scale(1.2)" : "scale(1)",
    transition: "transform 0.2s ease",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFB3DE",
    margin: "0 0 8px 0",
  };

  const bioStyle = {
    fontSize: "16px",
    color: "#E8DDD2",
    lineHeight: "1.4",
  };

  return (
    <div style={containerStyle}>
      <img
        src={photoUrl}
        alt={name}
        style={imageStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;