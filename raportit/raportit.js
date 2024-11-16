// 1.Kuka käyttää dronea
db.drone_usage.aggregate([
    { $match: { end_time: null } },
    { $lookup: {
        from: 'user',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user_info'
    }},
    { $lookup: {
        from: 'drone',
        localField: 'drone_id',
        foreignField: '_id',
        as: 'drone_info'
    }}
  ]);
  
  // 2. Which drones are available (not in use)
  db.drone.aggregate([
    { $lookup: {
        from: 'drone_usage',
        localField: '_id',
        foreignField: 'drone_id',
        as: 'usage_info'
    }},
    { $match: {
        'usage_info.end_time': { $not: { $eq: null } }
    }}
  ]);
  
  // 3. Pictures taken by drones and their users
  db.picture.aggregate([
    { $lookup: {
        from: 'user',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user_info'
    }},
    { $lookup: {
        from: 'drone',
        localField: 'drone_id',
        foreignField: '_id',
        as: 'drone_info'
    }}
  ]);
  
  // 4. Detailed picture report with drone, analysis, user, timestamp, and location
  db.picture.aggregate([
    { $lookup: {
        from: 'user',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user_info'
    }},
    { $lookup: {
        from: 'drone',
        localField: 'drone_id',
        foreignField: '_id',
        as: 'drone_info'
    }}
  ]);
  