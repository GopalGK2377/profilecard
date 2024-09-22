import PropTypes from "prop-types";

const userData = [
  {
    name: "Dayanna",
    city: "New York",
    description: "Front-End Developer",
    skills: ["UI/UX", "Front-End Developer", "HTML", "CSS",
      "JavaScript", "React", "Node"],
    online: false,
    profile: "images/1.jpg",
  },
  {
    name: "Sagira",
    city: "california",
    description: "Full stack web developer",
    skills: ["Vlogging", "Web development", "HTML",
      "CSS", "JavaScript", "React", "Angular"],
    online: true,
    profile: "images/2.jpg",
  },
  {
    name: "Robert",
    city: "San Francisco",
    description: "Senior Software developer",
    skills: ["C", "C++", "Java Programming", "Python",
      "C#.Net", "MySQL", "MangoDB"],
    online: true,
    profile: "images/3.jpg",
  },
]




function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img"></img>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export const UserCard = () => {
  return (
  <>
  {userData.map((user,index)=>(
    <User key={index}
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}/>


  ))}
  </>
  );
};

User.PropTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
};





{/* <User name="Dayana" city="New York"
      description="Front-End Developer"
      skills={["UI/UX", "Front End Developer", "CSS",
        "JavaScript", "React", "Node"]}
      online={true} profile="images/2.jpg" /> */}
