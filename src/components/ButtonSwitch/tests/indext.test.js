/**
 * Testing ButtonSwitch component
 *
 * Run `jest app/components/core/buttonswitch` to test this
 * Run `jest app/components/core/buttonswitch -u` to update file snapshot
 *
 */
import React from 'react';
import renderer from 'react-test-renderer';

import ButtonSwitch from '../index';


describe('Testing ButtonSwitch', () => {
  let component;
  const mockOnChange = jest.fn();

  /**
   * Runs a function after each one of the tests in this file completes.
   * If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.
   */
  afterEach(() => {
    mockOnChange.mockClear()
  });

  it('renders correctly - [checked-false] [disabled-false]', () => {
    component = renderer
      .create(<ButtonSwitch
        checked={false}
        disabled={false}
        onChange={mockOnChange}
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly - [checked-true] [disabled-false]', () => {
    component = renderer
      .create(<ButtonSwitch
        checked
        disabled={false}
        onChange={mockOnChange}
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly - [checked-true] [disabled-true]', () => {
    component = renderer
      .create(<ButtonSwitch
        checked
        disabled
        onChange={mockOnChange}
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly - [checked-false] [disabled-true]', () => {
    component = renderer
      .create(<ButtonSwitch
        checked={false}
        disabled
        onChange={mockOnChange}
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call props.onChange when click switch button with `disabled` is `false`', () => {
    component = renderer
      .create(<ButtonSwitch
        checked={false}
        disabled={false}
        onChange={mockOnChange}
      />);

    const tree = component.toJSON();
    tree.props.onClick();

    // props onChange should called once time
    expect(mockOnChange.mock.calls.length).toBe(1);
  });

});
