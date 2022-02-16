require("../src/db/mongoose");
const User = require("../src/model/user");
const Task = require("../src/model/task");

// User.findByIdAndUpdate("61f2cf712eb24689df11bdfd", { age: 22 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 22 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Task.findByIdAndRemove("61f407db3c94040019db806e")
//   .then((user) => {
//     console.log(user);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return count;
// };

// updateAgeAndCount("61f2cf712eb24689df11bdfd", 2)
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ compleyed: false });
  return count;
};

deleteTaskAndCount("61f2d17d42bd26f4b2562244")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
