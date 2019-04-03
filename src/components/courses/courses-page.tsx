import React from 'react';
import { connect } from 'react-redux';
import { IApplicationState, IAuthor } from '../../store';
import { ICourse } from '../../store/.';
import * as AuthorActions from '../../store/author-actions';
import * as CourseActions from '../../store/course-actions';
import CourseList from './course-list';

interface ICoursesProps {
  authors: Array<IAuthor>;
  courses: Array<ICourse>;
  loadAuthors: () => void;
  loadCourses: () => void;
  createCourse: (course: ICourse) => void;
}

interface ICourseState {
  course: ICourse
}

export class CoursesPage extends React.Component<ICoursesProps, ICourseState> {

  constructor(props: ICoursesProps) {
    super(props);

    this.state = {
      course: {
        id: undefined,
        title: '',
        slug: '',
        category: '',
        authorId: 0,
        authorName: undefined
      }
    };
  }

  componentDidMount(): void {
    if (this.props.courses.length === 0) {
      this.props.loadCourses();      
    }

    if (this.props.authors.length === 0) {
      this.props.loadAuthors();
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

const getAuthorName = (authorId: number, state: IApplicationState): string => {
  const author = state.authors.find(a => a.id === authorId);
  return author
    ? author.name
    : ''; 
};

const mapStateToProps = (state: IApplicationState) => {
  return {
    courses: state.authors.length === 0
      ? []
      : state.courses.map(course => {
      return {
        ...course,
        authorName: getAuthorName(course.authorId, state)
      }
    }),
    authors: state.authors}
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      createCourse: (course: ICourse) => {
        dispatch(CourseActions.actions.createCourse(course))
      },
      loadCourses: () => {
        dispatch(CourseActions.actions.loadCourses())
      },
      loadAuthors: () => {
        dispatch(AuthorActions.actions.loadAuthors())
      }
    }  
};

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

export default coursesContainer;
