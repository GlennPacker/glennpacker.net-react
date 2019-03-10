import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main/>, div);
  ReactDOM.unmountComponentAtNode(div);
  shallow(<Main />);
});
