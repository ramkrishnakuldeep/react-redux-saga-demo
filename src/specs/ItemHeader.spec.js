import React from 'react';
import { shallow } from '../enzyme';
import ItemHeader from '../components/ItemHeader';

describe('ItemHeader component', () => {
    it('initial render', () => {
        const component = shallow(<ItemHeader />);
        expect(component).toMatchSnapshot();
    });
});
