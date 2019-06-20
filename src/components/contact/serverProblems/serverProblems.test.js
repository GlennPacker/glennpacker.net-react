import React from 'react';
import { shallow } from 'enzyme';

import ServerProblems from './index';

describe('Server Problems', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <ServerProblems />
        );
    })

    it('should render matching snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})