import React from 'react';
import { shallow } from 'enzyme';
import { create, update } from 'react-test-renderer';
import MyComponent from './../MyComponent';


// describe('My first snapshot MyComponent', () => {
//   test('MyComponent render', () => {
//       let tree = create(<MyComponent />)
//       expect(tree.toJSON()).toMatchSnapshot();
//   })
// })

// describe('MyComponent', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />); 
//     expect(component).toMatchSnapshot();
//   });
// });

describe('MyComponent', () => {
  let component;
  beforeEach(()=>{
    component = shallow(<MyComponent />);
  })

  // test('should be name empty',()=>{
  //   expect (component.state('name')).toBe('');
  // })
  test('should be name equal jose',()=>{
    expect (component.state('name')).toBe('jose');
    component.setState({name:'joao'})
    expect (component.state('name')).toBe('joao');
  })

});
