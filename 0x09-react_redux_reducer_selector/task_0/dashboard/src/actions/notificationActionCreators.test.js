import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { expect as expectChai } from 'chai';

var _ = require('lodash');

describe('Test notificationActionCreators.js', () => {
  it('test for markAsAread' , (done) => {
    const data = markAsAread(1);
    const result = { type: MARK_AS_READ, index: 1 };    
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });

  it('test for setNotificationFilter', (done) => {
    const data = setNotificationFilter('DEFAULT');
    const result = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };    
    expectChai(_.isEqual(data, result)).to.equal(true);
    done();
  });
});
