import { getAllNotificationsByUser, normalizedNotifications } from './notifications';
import { expect as expect2 } from 'chai';

  // ===== TASK_0 ==========

describe('notifications schema', () => {

    test('returns correct contexts', () => {

      const notifs = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

      // check returned content
      expect2(notifs.length).to.equal(2);
      expect2(notifs[0].guid).to.equal('2d8e40be-1c78-4de0-afc9-fcc147afd4d2');
      expect2(notifs[1].guid).to.equal('280913fe-38dd-4abd-8ab6-acdb4105f922');

      // check context items have correct values
      expect(notifs.some((notif) => notif.isRead === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.type === undefined)).toBe(false);
      expect(notifs.some((notif) => notif.value === undefined)).toBe(false);
  
      expect(notifs.some((notif) => Object.keys(notif).length !== 4)).toBe(false);
    });

    // ===== TASK_1 ==========
    
    test('gives empty contexts with wrong id', () => {
        const notifWrong = getAllNotificationsByUser('45');
        expect2(notifWrong.length).to.equal(0);
    });

    test('normalized data has correct result array', () => {

      let resultArray = [
        '5debd76480edafc8af244228',
        '5debd764507712e7a1307303',
        '5debd76444dd4dafea89d53b',
        '5debd76485ee4dfd1284f97b',
        '5debd7644e561e022d66e61a',
        '5debd7644aaed86c97bf9d5e',
        '5debd76413f0d5e5429c28a0',
        '5debd7642e815cd350407777',
        '5debd764c1127bc5a490a4d0',
        '5debd7646ef31e0861ec1cab',
        '5debd764a4f11eabef05a81d',
        '5debd764af0fdd1fc815ad9b',
        '5debd76468cb5b277fd125f4',
        '5debd764de9fa684468cdc0b'
      ];
  
      resultArray.sort();
      resultArray = resultArray.toString();
  
      let actual = [...normalizedNotifications.result];
      actual.sort();
      actual = actual.toString();
  
      expect2(actual).to.equal(resultArray);
    });

    test('normalized data has corrext users entity', () => {
      const { users } = normalizedNotifications.entities;
  
      const testUser = users['5debd764a7c57c7839d722e9'];
  
      expect(testUser).toHaveProperty('age', 25);
      expect(testUser).toHaveProperty('email', 'poole.sanders@holberton.nz');
      expect(testUser).toHaveProperty('id', '5debd764a7c57c7839d722e9');
      expect(testUser.name).toHaveProperty('first', 'Poole');
      expect(testUser.name).toHaveProperty('last', 'Sanders');
      expect(testUser).toHaveProperty('picture', 'http://placehold.it/32x32');
    });

    test('normalized data has correct messages entity', () => {
      const { messages } = normalizedNotifications.entities;
  
      const testMessage = messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];
  
      expect(testMessage).toHaveProperty(
        'guid',
        'efb6c485-00f7-4fdf-97cc-5e12d14d6c41'
      );
      expect(testMessage).toHaveProperty('isRead', false);
      expect(testMessage).toHaveProperty('type', 'default');
      expect(testMessage).toHaveProperty('value', 'Cursus risus at ultrices mi.');
    });
  
    test('normalized data has correct notifications entity', () => {
      const { notifications } = normalizedNotifications.entities;
  
      const testNotif = notifications['5debd7642e815cd350407777'];
  
      expect(testNotif).toHaveProperty('author', '5debd764f8452ef92346c772');
      expect(testNotif).toHaveProperty(
        'context',
        '3068c575-d619-40af-bf12-dece1ee18dd3'
      );
      expect(testNotif).toHaveProperty('id', '5debd7642e815cd350407777');
    });
});
