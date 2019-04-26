import { mount } from 'enzyme';
import React from 'react';
import { authors, courses, newCourse } from '../../../testing/mockData';
import { ManageCoursePage } from './manage-course-page';

const render = (args?: any) => {
    const defaultProps = {
        authors,
        courses,
        // React Router History
        history: {},
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,
        match: {}
    };

    const props = { ...defaultProps, ...args };

    return mount(<ManageCoursePage {...props} />);
}

it('sets error when attempting to save an empty title field', () => {
    const wrapper = render();
    wrapper.find('form').simulate('submit');
    const error = wrapper.find('.alert').first();

    expect(error.text()).toBe('Title is required.');

});
