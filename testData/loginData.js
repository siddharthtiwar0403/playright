module.exports = [
  {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    expected: 'You logged into a secure area!',
  },
  {
    username: 'wrong',
    password: 'SuperSecretPassword!',
    expected: 'Your username is invalid!',
  },
  {
    username: 'tomsmith',
    password: 'wrong',
    expected: 'Your password is invalid!',
  },
  {
    username: 'siddharthtiwari0403',
    password: 'Siddharth@123',
    expected: 'Your password is correct'
  }
];