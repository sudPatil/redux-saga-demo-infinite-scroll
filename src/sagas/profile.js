import { ProfileAction } from '../action/actions';
import { put } from 'redux-saga/effects';
import Services from '../common/services';

export function* getUsers(action) {
    const { page } = action;
    let url = `https://randomuser.me/api/?page=${page || 1}&results=10&seed=user`
    yield put({ type: ProfileAction.GET_USERS_IN_PROGRESS })
    const data = yield Services.post(url);
    yield put({ type: ProfileAction.GET_USER_SUCESS, data: data.results });
}