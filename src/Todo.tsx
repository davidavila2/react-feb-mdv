import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Todo() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://my-30-x-30-server.herokuapp.com/projects').then(res => res.json()).then((res) => setProjects(res))
  }, [])

  return (
    <>
      <h2>Projects List</h2>
      <ul>
        {projects.length === 0 ? 'Loading...' : projects.map((res: any) => <li key={res.id}>{ res?.title}</li>
        )}
      </ul>
      <Link to="/">Home</Link>
    </>
  );
}

export default Todo;