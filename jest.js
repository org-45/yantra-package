const functions = {
  add: (num1, num2) => num1 + num2,//adds 2 num
  isNull: () => null, //simply return null
  checkValue: (x) => x, //takes single argument and return it
  createUser: () => {      //create and return user object
    const user = { firstName: 'Prasiddhi' };
    user['lastName'] = 'Dahal';
    return user;
  },
  fetchUser: () => { //returns static user object
    const user = {
      name: 'prasiddhi', 
    };
    return Promise.resolve(user);
  },
};

export default functions;
