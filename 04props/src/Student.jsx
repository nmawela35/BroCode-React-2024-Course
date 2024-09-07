import PropTypes from 'prop-types'

function Student({ name, surname, age, occupation }) {
  return (
    <>
      <div className="student">
        <div>Name: {name}</div>
        <div>{surname}</div>
        <div>{occupation}</div>
        <div>{age >= 25 ? "Yes" : "No"}</div>
      </div>
    </>
  );
}

// Student.proptypes ={
//     name: PropTypes.string,
//     surname: PropTypes.string,
//     age: PropTypes.number,
// }

Student.defaultProps ={
    name:"N/A",
    surname: "N/A",
    occupation: "It Specialist",
    age: "Not mentioned"
}



export default Student;
