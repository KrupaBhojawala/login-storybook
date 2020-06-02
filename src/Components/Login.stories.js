import React from 'react';
import { action } from '@storybook/addon-actions';

import Login from './Login';

export default {
    component: Login,
    title: 'Login',
    excludeStories: /.*Data$/,
};

export const loginData = {
    username: '',
    password: '',
    state: 'LOGIN_DEFAULT',
    updatedAt: new Date(),
};

export const Default = () => <Login login={{...loginData}}  />;

export const Success = () => <Login login={{...loginData, state: 'LOGIN_SUCCESS'}} />;

export const Failure = () => <Login login={{...loginData, state: 'LOGIN_FAIL'}} />;