

//Komentoriville syötettävät komennot mondoDB konttiin kirjautumisen jälkeen

// User collection
db.user.insertMany([
    { _id: 1, fname: 'Matti', lname: 'Meikäläinen', password: 'password_1', token: 'abc123', is_using_drone: true },
    { _id: 2, fname: 'Kaisa', lname: 'Virtanen', password: 'password_2', token: 'def456', is_using_drone: false },
    { _id: 3, fname: 'Pekka', lname: 'Korhonen', password: 'password_3', token: 'ghi789', is_using_drone: true },
    { _id: 4, fname: 'Sanna', lname: 'Lehtinen', password: 'password_4', token: 'jkl012', is_using_drone: false },
    { _id: 5, fname: 'Tuomas', lname: 'Laine', password: 'password_5', token: 'mno345', is_using_drone: false },
    { _id: 6, fname: 'Emma', lname: 'Salonen', password: 'password_6', token: 'pqr678', is_using_drone: false },
    { _id: 7, fname: 'Antti', lname: 'Heikkinen', password: 'password_7', token: 'stu901', is_using_drone: false }
  ]);
  
  // Drone collection
  db.drone.insertMany([
    { _id: 1, brand: 'DJI', model: 'Phantom 4' },
    { _id: 2, brand: 'Parrot', model: 'Anafi' },
    { _id: 3, brand: 'Autel', model: 'EVO II' },
    { _id: 4, brand: 'DJI', model: 'Mavic Air 2' },
    { _id: 5, brand: 'Yuneec', model: 'Typhoon H' },
    { _id: 6, brand: 'Skydio', model: '2+' },
    { _id: 7, brand: 'DJI', model: 'Inspire 2' }
  ]);
  
  // Drone Usage collection
  db.drone_usage.insertMany([
    { _id: 1, start_time: new Date('2024-11-01T10:00:00Z'), end_time: new Date('2024-11-01T12:00:00Z'), drone_id: 1, user_id: 2 },
    { _id: 2, start_time: new Date('2024-11-02T09:00:00Z'), end_time: null, drone_id: 2, user_id: 1 },
    { _id: 3, start_time: new Date('2024-11-03T14:00:00Z'), end_time: new Date('2024-11-03T16:00:00Z'), drone_id: 3, user_id: 4 },
    { _id: 4, start_time: new Date('2024-11-04T11:00:00Z'), end_time: new Date('2024-11-04T13:00:00Z'), drone_id: 4, user_id: 5 },
    { _id: 5, start_time: new Date('2024-11-05T15:00:00Z'), end_time: new Date('2024-11-05T17:00:00Z'), drone_id: 5, user_id: 6 },
    { _id: 6, start_time: new Date('2024-11-06T08:00:00Z'), end_time: new Date('2024-11-06T10:00:00Z'), drone_id: 6, user_id: 7 },
    { _id: 7, start_time: new Date('2024-11-07T13:00:00Z'), end_time: null, drone_id: 7, user_id: 3 }
  ]);
  
  // Picture collection
  db.picture.insertMany([
    { _id: 1, name: 'Kuva1', analysis: 'Analysis of field', lat: 60.1699, lon: 24.9384, datetime: new Date('2024-11-01T10:30:00Z'), drone_id: 1, user_id: 2 },
    { _id: 2, name: 'Kuva2', analysis: 'Tree health analysis', lat: 60.1921, lon: 24.9458, datetime: new Date('2024-11-01T11:00:00Z'), drone_id: 1, user_id: 2 },
    { _id: 3, name: 'Kuva3', analysis: 'Building inspection', lat: 60.2037, lon: 24.9613, datetime: new Date('2024-11-02T09:30:00Z'), drone_id: 2, user_id: 1 },
    { _id: 4, name: 'Kuva4', analysis: 'Bridge stability check', lat: 60.2200, lon: 24.9300, datetime: new Date('2024-11-03T14:30:00Z'), drone_id: 3, user_id: 4 },
    { _id: 5, name: 'Kuva5', analysis: 'Forest survey', lat: 60.2500, lon: 24.8900, datetime: new Date('2024-11-04T11:45:00Z'), drone_id: 4, user_id: 5 },
    { _id: 6, name: 'Kuva6', analysis: 'Road condition analysis', lat: 60.2700, lon: 24.8500, datetime: new Date('2024-11-05T15:30:00Z'), drone_id: 5, user_id: 6 },
    { _id: 7, name: 'Kuva7', analysis: 'Power line inspection', lat: 60.3000, lon: 24.8200, datetime: new Date('2024-11-06T08:45:00Z'), drone_id: 6, user_id: 7 }
  ]);