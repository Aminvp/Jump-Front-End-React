function filteredUserList(users) {

  if (!Array.isArray(users)) {
    return "Input must be an array of users";
  }
  let filteredUsers = users.filter((user) => user.age > 11);
  filteredUsers.sort((a, b) => a.name.localeCompare(b.name));

  return filteredUsers;
}

const filter = filteredUserList;

const users = [
  { name: "ali", age: 10 },
  { name: "hossein", age: 45 },
  { name: "JAVAD", age: 12 },
  { name: "REZA", age: 20 },
  { name: "SAJJAD", age: 11 },
];

console.log(filter(1232));

module.exports = filter;
