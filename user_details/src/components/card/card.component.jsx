import "./card.styles.css";

const Card = ({ user }) => {
  const {
    id,
    name,
    age,
    favoriteFood,
    profile_image,
    jobTitle,
    gender,
    location,
  } = user;

  return (
    <div key={id}>
      <div className="card-container">
        <img src={profile_image} alt={`User  ${name}`} />
        <h2>{name}</h2>
        <h4>{jobTitle}</h4>
        <p>Age : {age}</p>
        <p>Gender : {gender}</p>
        <p>Location : {location}</p>
        <p>Favorite food : {favoriteFood}</p>
      </div>
    </div>
  );
};
export default Card;
