import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../../store';
import { ICourse } from '../../store/course';
import * as CourseStore from '../../store/course';

type CourseProps = 
  IApplicationState
  & typeof CourseStore.actions
  // & RouteComponentProps<{}>;  

export class CoursesPage extends React.Component<CourseProps, CourseStore.ICourseState> {
  constructor(props: any) {
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
    this.props.createCourse(this.state.course);
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
        {this.props.courses.map((course: ICourse) => 
          (<div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  courses: state.courses
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    createCourse: (course: ICourse) => {
      dispatch(CourseStore.actions.createCourse(course));
    }
  }
};

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

export default coursesContainer;
