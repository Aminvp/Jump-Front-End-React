function filteredUserList(users) {
  if (Array.isArray(users)) {
      let newUsers = users.filter((user) => {
          return user.age > 11;
      });
      return newUsers;
  } else {
      return "Input must be an array of users";
  }
}

const filter = filteredUserList;

const users = [
  { name: "ali", age: 10 },
  { name: "hossein", age: 45 },
  { name: "JAVAD", age: 12 },
  { name: "REZA", age: 20 },
  { name: "SAJJAD", age: 11 },
];

console.log(filter("string"));

module.exports = filter;
