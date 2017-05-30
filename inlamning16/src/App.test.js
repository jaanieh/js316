import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('testar inputName', () => {
    let wrapper = shallow(<MyForm/>);
        const inputName = <input />;
        expect(wrapper.contains(inputName)).toBe(true);
        
});