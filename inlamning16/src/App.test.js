import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import MyForm from './myForm';
import Button from './button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


test('testar inputName', () => {
    let wrapper = mount(<MyForm/>);
        wrapper.find({className: 'name' });
        
});

test('testar inputEmail', () => {
    let wrapper = mount(<MyForm/>);
    wrapper.find({className: 'email'});
});

test('testar button', () => {
    let wrapper = shallow(<Button />);
    let actual = wrapper.find("button").hasClass("buttonClass");
    let expected = true;
    expect(actual).toBe(expected);
})

