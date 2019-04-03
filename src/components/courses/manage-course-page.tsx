import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IApplicationState, IAuthor, ICourse } from '../../store';
import * as AuthorActions from '../../store/author-actions';
import * as CourseActions from '../../store/course-actions';

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

export class ManageCoursePage extends Component<ICoursesProps, ICourseState> {

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
            <div>
                <h2>Manage Course</h2>
            </div>
        )
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        courses: state.courses,
        authors: state.authors
    };
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

const manageCourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursePage);

export default manageCourseContainer;
