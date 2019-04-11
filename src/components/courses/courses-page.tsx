import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { IApplicationState, IAuthor } from '../../store';
import { ICourse } from '../../store/.';
import { loadAuthors } from '../../store/author-actions';
import { deleteCourse, loadCourses } from '../../store/course-actions';
import Spinner from '../common/spinner';
import CourseList from './course-list';

interface ICoursesProps {
  authors: Array<IAuthor>;
  courses: Array<ICourse>;
  loadAuthors: () => Promise<void>;
  loadCourses: () => Promise<void>;
  deleteCourse: (course: ICourse) => Promise<any>;
  loading: boolean;
}

interface ICourseState {
  redirectToAddCoursePage: boolean;
}

export class CoursesPage extends React.Component<ICoursesProps, ICourseState> {

  constructor(props: ICoursesProps) {
    super(props);

    this.state = {
      redirectToAddCoursePage: false
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

  handleDeleteCourse = (course: ICourse) => {
    toast.success('Course deleted');
    this.props.deleteCourse(course).catch(error => {
      toast.error('Delete failded. ' + error.message, {autoClose: false});
    });
  }


  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading
        ? <Spinner /> : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => this.setState({ redirectToAddCoursePage: true })}
          >
            Add Course
          </button>
          <CourseList onDeleteClick={this.handleDeleteCourse} courses={this.props.courses} />
        </>
        )}
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
          authorName: getAuthorName(course.authorId as number, state)
        }
      }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     loadCourses: () => {
//       dispatch(loadCourses())
//     },
//     loadAuthors: () => {
//       dispatch(loadAuthors())
//     },
//     deleteCourse: (course: ICourse) => {
//       dispatch(deleteCourse(course))
//     }
//   }
// };

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  deleteCourse
};

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

export default coursesContainer;
