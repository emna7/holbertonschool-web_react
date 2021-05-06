import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { loginRequest } from './uiActionCreators';
import { expect as expectChai } from 'chai';
import fetchMock from 'fetch-mock'
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

var _ = require('lodash');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test uiActionCreators.js', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('test for LOGIN' , (done) => {
    const data = login('test@test.com', 'test');
    const result = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for LOGOUT', (done) => {
    const data = logout(1);
    const result = { type: LOGOUT };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for DISPLAY_NOTIFICATION_DRAWER', (done) => {
    const data = displayNotificationDrawer(1);
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for HIDE_NOTIFICATION_DRAWER', (done) => {
    const data = hideNotificationDrawer(1);
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test should verify that if the API returns the right response, the store received two actions "LOGIN" and "LOGING_SUCCESS"', (done) => {
    const store = mockStore({});

    fetchMock.get("http://localhost:8564/login-success.json", "{}");
    return store
      .dispatch(loginRequest("test@test.com", "test"))
      .then(() => {
        const data1 = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
        const result1 = store.getActions()[0];
        const data2 = { type: LOGIN_SUCCESS };
        const result2 = store.getActions()[1];

        expectChai(_.isEqual(data1, result1)).to.equal(true);
        expectChai(_.isEqual(data2, result2)).to.equal(true);
        done();
      });
  });

  it('test should verify that if the API query fails, the store received two actions "LOGIN" and "LOGIN_FAILURE"', (done) => {
    const store = mockStore({});

    fetchMock.get("http://localhost:8564/login-success.json", 500);
    return store
      .dispatch(loginRequest("test@test.com", "test"))
      .then(() => {
        const data1 = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
        const result1 = store.getActions()[0];
        const data2 = { type: LOGIN_FAILURE };
        const result2 = store.getActions()[1];

        expectChai(_.isEqual(data1, result1)).to.equal(true);
        expectChai(_.isEqual(data2, result2)).to.equal(true);
        done();
      });
    done();
  });
});
