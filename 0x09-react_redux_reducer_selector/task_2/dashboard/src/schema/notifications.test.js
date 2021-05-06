import { getAllNotificationsByUser, normalizedNotifs } from './notifications';

describe('notifications schema', () => {
  test('getAllNotificationsByUser returns the correct data', () => {
    const expected = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
        isRead: true,
        type: 'urgent',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      },
      {
        guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
        isRead: false,
        type: 'urgent',
        value:
          'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
      }
    ];

    const notifs = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

    // Test returned length
    expect(notifs.length).toBe(2);

    // Test returned content
    expect(
      notifs.some(
        (notif) => notif.guid === '2d8e40be-1c78-4de0-afc9-fcc147afd4d2'
      )
    ).toBe(true);

    expect(
      notifs.some(
        (notif) => notif.guid === '280913fe-38dd-4abd-8ab6-acdb4105f922'
      )
    ).toBe(true);

    // Make sure array items have correct values
    expect(notifs.some((notif) => notif.isRead === undefined)).toBe(false);
    expect(notifs.some((notif) => notif.type === undefined)).toBe(false);
    expect(notifs.some((notif) => notif.value === undefined)).toBe(false);

    expect(notifs.some((notif) => Object.keys(notif).length !== 4)).toBe(false);
  });

  test('normalized data has expected result array', () => {
    const expected = [
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

    const { result } = normalizedNotifs;

    const expectedSet = new Set();
    expected.forEach((value) => expectedSet.add(value));

    const resultSet = new Set();
    result.forEach((value) => resultSet.add(value));

    expect(resultSet.size).toEqual(expectedSet.size);

    // Make sure sets contain same elements
    const difference = new Set(expectedSet);
    for (let el of resultSet) difference.delete(el);

    expect(difference.size).toBe(0);
  });

  test('normalized data has expected users entity', () => {
    const { users } = normalizedNotifs.entities;

    // Get test user
    const testUser = users['5debd764a7c57c7839d722e9'];

    // Make sure user has correct properties
    expect(testUser).toHaveProperty('age', 25);
    expect(testUser).toHaveProperty('email', 'poole.sanders@holberton.nz');
    expect(testUser).toHaveProperty('id', '5debd764a7c57c7839d722e9');
    expect(testUser.name).toHaveProperty('first', 'Poole');
    expect(testUser.name).toHaveProperty('last', 'Sanders');
    expect(testUser).toHaveProperty('picture', 'http://placehold.it/32x32');
  });

  test('normalzied data has expected messages entity', () => {
    const { messages } = normalizedNotifs.entities;

    // Get test message
    const testMessage = messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];

    // Make sure message has correct properties
    expect(testMessage).toHaveProperty(
      'guid',
      'efb6c485-00f7-4fdf-97cc-5e12d14d6c41'
    );
    expect(testMessage).toHaveProperty('isRead', false);
    expect(testMessage).toHaveProperty('type', 'default');
    expect(testMessage).toHaveProperty('value', 'Cursus risus at ultrices mi.');
  });

  test('normalized data has correct notifications entity', () => {
    const { notifications } = normalizedNotifs.entities;

    // Get test notif
    const testNotif = notifications['5debd7642e815cd350407777'];

    expect(testNotif).toHaveProperty('author', '5debd764f8452ef92346c772');
    expect(testNotif).toHaveProperty(
      'context',
      '3068c575-d619-40af-bf12-dece1ee18dd3'
    );
    expect(testNotif).toHaveProperty('id', '5debd7642e815cd350407777');
  });
});
