import React from 'react';
import { mount } from '../enzyme';
import CategoryList from '../components/CategoryList';
import { MockCategoryList } from './__mock__/data';

const filterCategory = jest.fn();

const props = {
    categories: MockCategoryList.data,
    filterBy: 2,
    filterCategory
};

describe('CategoryList component', () => {
    it('initial render', () => {
        const wrapper = mount(<CategoryList {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should able to dispatch action on click', () => {
        const wrapper = mount(<CategoryList {...props} />);
        wrapper.find('.category').at(1).simulate('click');
        expect(filterCategory).toHaveBeenCalledTimes(1);
    });
});
