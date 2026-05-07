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
  }
];