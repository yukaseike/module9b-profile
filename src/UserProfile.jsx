function UserProfile() {
  const name = "Michiyo Kawamura";
  const bio = "Frontend developer who loves hiking and matcha lattes.";
  const photoUrl = "https://images.unsplash.com/photo-1542833807-ad5af0977050?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "320px",
    margin: "80px auto",
    padding: "24px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
  };

  const nameStyle = {
    fontSize: "24px",
    margin: "0 0 8px 0",
  };

  const bioStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.4",
  };

  return (
    <div style={containerStyle}>
      <img src={photoUrl} alt={name} style={imageStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;