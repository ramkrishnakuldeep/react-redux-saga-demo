import React from 'react';
import { shallow } from '../enzyme';
import ItemFooter from '../components/ItemFooter';

describe('ItemFooter component', () => {
    it('initial render', () => {
        const component = shallow(<ItemFooter />);
        expect(component).toMatchSnapshot();
    });
});
