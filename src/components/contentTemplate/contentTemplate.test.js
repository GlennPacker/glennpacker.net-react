import React from 'react';
import { shallow } from 'enzyme';

import ContentTemplate from './index';

describe('Server Problems', () => {
    let wrapper;
    let content;
    let articles;

    beforeAll(() => {
        content = (<div>hello</div>)
        articles = [
            { a: 1 },
            { a: 2 }
        ]

        wrapper = shallow(
            <ContentTemplate
                content={content}
                articles={articles}
            />
        );
    })

    it('should render matching snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})