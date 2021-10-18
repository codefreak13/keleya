import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { Notification } from '../src/screens';

it('renders correctly', () => {
    const tree = renderer
        .create(<Notification />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

// test('Notification snapshot', () => {
//     const snap = renderer.create(
//         <Notification />
//     ).toJSON();
//     expect(snap).toMatchSnapshot()
// })