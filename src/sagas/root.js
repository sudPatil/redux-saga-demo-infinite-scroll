import { takeLatest, all } from 'redux-saga/effects';
import { getUsers } from './profile';
import { ProfileAction } from '../action/actions';

/**
 * Return all sagas as combined.
 */
export default function* rootSagas() {
    yield all([
        yield takeLatest(ProfileAction.GET_USERS, getUsers)
    ])
}