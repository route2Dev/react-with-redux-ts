import React from 'react';
import { ComponentBase } from '../component-base';
import { ICourse } from './course';

export class CoursesPage extends ComponentBase<ICourse> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      course: {
        title: ''
      }
    };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const course = { ...this.state.course, title: event.currentTarget.value };
    this.setState({ course });
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    alert(this.state.course.title);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
