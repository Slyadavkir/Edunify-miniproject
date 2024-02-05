// pages/showSchools.jsx
import db from '../path-to-db-file';

export async function getServerSideProps() {
  try {
    // Fetch schools from the database
    const [schools] = await db.query('SELECT name, address, city, image FROM schools');
    
    return {
      props: {
        schools,
      },
    };
  } catch (error) {
    console.error('Error fetching schools:', error);
    return {
      props: {
        schools: [],
      },
    };
  }
}

export default function ShowSchools({ schools }) {
  return (
    <div>
      <h1>Schools</h1>
      {schools.map((school) => (
        <div key={school.name}>
          <h2>{school.name}</h2>
          <p>Address: {school.address}</p>
          <p>City: {school.city}</p>
          <img src={`/schoolImages/${school.image}`} alt={`${school.name} Image`} />

          {/* Add styling to format as an eCommerce website */}
        </div>
      ))}
    </div>
  );
}
