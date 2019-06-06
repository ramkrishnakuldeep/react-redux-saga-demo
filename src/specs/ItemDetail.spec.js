import React from 'react';
import { shallow } from '../enzyme';
import ItemDetail from '../components/ItemDetail';
import { MockItem, MockSoldOutItem } from './__mock__/data';

describe('ItemDetail component', () => {
    it('render soldout item', () => {
        const component = shallow(<ItemDetail itemDetails ={MockSoldOutItem} />);
        expect(component).toMatchSnapshot();
    });

    it('render item', () => {
        const component = shallow(<ItemDetail itemDetails ={MockItem} />);
        expect(component).toMatchSnapshot();
    });
});
