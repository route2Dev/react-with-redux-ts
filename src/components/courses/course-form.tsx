import { IAuthor, ICourse } from '../../store';
import React from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

export class CourseFormErrors {
  onSave? = '';
  title? = '';
  authorId? = '';
  category? = '';
}

interface ICourseFormProps {
  authors: IAuthor[];
  course: ICourse;
  errors?: CourseFormErrors;
  onSave?: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  saving?: boolean;
}

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
        required={true}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ''}
        required={true}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        required={true}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default CourseForm;
