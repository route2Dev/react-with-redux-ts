import React from 'react';
import { IAuthor, ICourse } from '../../store';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = new CourseFormErrors()
}: ICourseFormProps) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ''}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export class CourseFormErrors {
  onSave? = '';
  title? = '';
  author? = '';
  category? = '';
}

interface ICourseFormProps {
  authors: Array<IAuthor>;
  course: ICourse;
  errors?: CourseFormErrors;
  onSave?: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  saving?: boolean;
}

export default CourseForm;
