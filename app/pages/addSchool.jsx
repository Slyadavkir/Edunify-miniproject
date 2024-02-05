// pages/addSchool.jsx
import { useForm } from 'react-hook-form';
import db from '../path-to-db-file';

export default function AddSchool() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      // Save the school data to the database
      await db.query('INSERT INTO schools SET ?', data);
      console.log('School added successfully!');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input type="text" name="name" ref={register({ required: true })} />
      {errors.name && <span>Name is required</span>}

      {/* Add other form fields and validations here */}
      
      <label>Image:</label>
      <input type="file" name="image" ref={register({ required: true })} />
      {errors.image && <span>Image is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
