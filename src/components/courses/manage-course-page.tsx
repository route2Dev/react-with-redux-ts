import { History } from 'history';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { IApplicationState, IAuthor, ICourse } from '../../store';
import { loadAuthors } from '../../store/author-actions';
import { loadCourses, saveCourse } from '../../store/course-actions';
import Spinner from '../common/spinner';
import CourseForm, { CourseFormErrors } from './course-form';

const newCourse: ICourse = {
    title: '',
    authorId: null,
    category: ''
};

interface IManageCourseProps {
    course: ICourse;
    authors: Array<IAuthor>;
    courses: Array<ICourse>;
    loadAuthors: () => Promise<void>;
    loadCourses: () => Promise<void>;
    saveCourse: (course: ICourse) => Promise<void>;
    history: History;
}

interface IManageCourseState {
    course: ICourse;
    errors: CourseFormErrors;
    saving: boolean;
}

export class ManageCoursePage extends Component<IManageCourseProps, IManageCourseState> {

    constructor(props: IManageCourseProps) {
        super(props);

        this.state = {
            course: props.course,
            errors: new CourseFormErrors(),
            saving: false
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

    componentDidUpdate(prevProps: IManageCourseProps): void {
        const course = this.props.course;
        if (prevProps.course !== course && course !== this.state.course) {
            this.setState({ course });            
        }
    }

    handleChange = (event: any) => {
        const { name, value } = event.target;

        const course = { ...this.state.course, [name]: name === 'authorId' ? parseInt(value, 10) : value }
        this.setState({ course });
        console.log('after state:', this.state);
    }

    formIsValid = (): boolean => {
        const {title, authorId, category} = this.state.course;
        const errors: CourseFormErrors = {};

        if (!title) {
            errors.title = 'Title is required.';            
        }

        if (!authorId) {
            errors.author = 'Author is required.';            
        }

        if (!category) {
            errors.category = 'Category is required.';
        }

        this.setState({errors});

        return Object.keys(errors).length === 0;
    } 

    handleSave = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!this.formIsValid()) {
            return;
        }
        this.setState({saving: true});
        this.props.saveCourse(this.state.course)
            .then(() => {
                toast.success('Course saved.');
                this.props.history.push('/courses');
            })
            .catch(error => {
                this.setState({saving: false, errors:{ onSave: error.message}});                               
            });

    }

    render() {
        return this.props.authors.length === 0 || this.props.courses.length == 0
            ? (<Spinner />)
            : (
                <CourseForm
                    course={this.state.course}
                    authors={this.props.authors}
                    errors={this.state.errors}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    saving={this.state.saving}
                />
            )
    }
}

export const getCourseBySlug = (courses: Array<ICourse>, slug: string) => {
    return courses.find(course => course.slug === slug) || newCourse;
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
    const slug = ownProps.match.params.slug;
    const course = slug && state.courses.length > 0
        ? getCourseBySlug(state.courses, slug)
        : newCourse;

    return {
        course,
        courses: state.courses,
        authors: state.authors
    };
};

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
    saveCourse
};

const manageCourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursePage);

export default manageCourseContainer;
