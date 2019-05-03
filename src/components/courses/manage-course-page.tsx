import { History } from 'history';
import React, { Component, useEffect, useState } from 'react'
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
    selectedCourse: ICourse;
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

export const ManageCoursePage = ({ 
    selectedCourse,
    authors,
    courses,
    loadAuthors,
    loadCourses,
    saveCourse,
    history,    
}: IManageCourseProps) => {

    const [course, setCourse] = useState({ ...selectedCourse });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses();
        } else {
            setCourse({ ...selectedCourse });
        }

        if (authors.length === 0) {
            loadAuthors();
        }        
    }, [selectedCourse]);

    // class field - ES7 Arrow function enhancement.
    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }))
    }

    const formIsValid = (): boolean => {
        const {title, authorId, category} = course;
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

        setErrors(errors);

        return Object.keys(errors).length === 0;
    } 

    const handleSave = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formIsValid()) {
            return;
        }

        setSaving(true);

        saveCourse(course)
            .then(() => {
                toast.success('Course saved.');
                history.push('/courses');
            })
            .catch(error => {
                setSaving(false);
                setErrors({ onSave: error.message});
            });
    }

    return authors.length === 0 || courses.length == 0
        ? (<Spinner />)
        : (
            <CourseForm
                course={course}
                authors={authors}
                errors={errors}
                onChange={handleChange}
                onSave={handleSave}
                saving={saving}
            />
        )
}

export const getCourseBySlug = (courses: Array<ICourse>, slug: string) => {
    return courses.find(course => course.slug === slug) || newCourse;
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
    const slug = ownProps.match.params.slug;
    const selectedCourse = slug && state.courses.length > 0
        ? getCourseBySlug(state.courses, slug)
        : newCourse;

    return {
        selectedCourse,
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
