import { combineEpics } from 'redux-observable';

import AuthEpic from './AuthEpic'

const rootEpic = combineEpics(
    AuthEpic.signupEpic,
);

export default rootEpic;