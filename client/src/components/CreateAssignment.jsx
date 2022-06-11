import { useState } from 'react';
import axios from 'axios';


const CreateAssignment = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState(1);

  // = helpers =
  const confirm = () => {
    axios.post('/assignments', { title, description, url, teacherId, subjectId });
  };

  return (
    <section className='assignment__form'>
      <h3>Create Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <input value={teacherId} onChange={(e) => setTeacherId(+e.target.value)} />
        <input value={subjectId} onChange={(e) => setSubjectId(+e.target.value)} />
      </form>
      <button onClick={confirm} type='Submit'>Create</button>
    </section>
  );
};

export default CreateAssignment;