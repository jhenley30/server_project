const user = {
  name: 'Test',
  location: 'Colorado'
}

const userObject = () => {
  return user;
}

const login = (username) => {
  if (username === 'Rick') {
    return 'You are logged in.';
  } else {
    return 'unkown user.';
  }
}

const greetingObject = (name, location) => {
  return 'Hello ' + name + ' from ' + location;
}

const helloWorld = () => {
  return 'Hello World';
}

const messageObject = (msg) => {
  return msg;

}

module.exports = {
  userObject,
  messageObject,
  greetingObject,
  login,
  helloWorld
}
