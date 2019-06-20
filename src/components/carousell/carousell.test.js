import React from 'react';
import '../SetupTests';
import Carousell from './index';
import { shallow } from 'enzyme';


describe('BackEndDevelopment', () => {
    it('renders correctly', () => {
        const imgs = [
            'a.png'
        ];

        const wrapper = shallow(
            <Carousell
                path="path"
                imgs={imgs}
            />
        )

        expect(wrapper).toMatchSnapshot();
    })
})