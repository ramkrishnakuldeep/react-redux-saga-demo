import React from 'react';
import { shallow } from '../enzyme';
import SoldOut from '../components/Item/SoldOut';

describe('SoldOut component', () => {
    it('initial render', () => {
        const component = shallow(<SoldOut />);
        expect(component).toMatchSnapshot();
    });
});
