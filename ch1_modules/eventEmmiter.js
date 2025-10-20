const EventEmitter = require("events");
const userExists = require("../dummyData.js");
const emitter = new EventEmitter();

const eventCounts = {
  userLoggedIn: 0,
};

const loggedInUsers = [];

emitter.on("userLoggedIn", (data) => {
  if (!data || !data.username || !data.password || !data.userId) {
    console.log("username and password are required");
    return;
  }
  const userDetails = userExists.find(
    (user) =>
      user.username === data.username &&
      user.password === data.password &&
      user.userId === data.userId
  );

  if (loggedInUsers.includes(userDetails.id)) {
    console.log("User already logged in:", data.username);
    return;
  }

  if (userDetails) {
    loggedInUsers.push(data.userId);
    eventCounts.userLoggedIn += 1;
    console.log("User logged in:", data);
  } else {
    console.log("Invalid credentials");
  }
});

emitter.on("userLoggedOut", (data) => {
  if (loggedInUsers.length > 0 && loggedInUsers.includes(data?.userId)) {
    eventCounts.userLoggedIn -= 1;
    console.log("User logged out:", data?.username || "Unknown user");
    loggedInUsers.filter((id) => id !== data?.userId);
    return;
  }
  console.log("user is not logged in yet");
  return;
});

// user events
// emitter.emit("userLoggedIn", {
//   username: "john_doe",
//   password: "pass123",
// });

emitter.emit("userLoggedIn", {
  userId: 1,
  username: "admin",
  password: "admin",
});

console.log("Total userLoggedIn events:", eventCounts.userLoggedIn);

emitter.emit("userLoggedOut", {
  userId: 2,
  username: "john_doe",
  password: "pass123",
});

emitter.emit("userLoggedIn", {
  userId: 2,
  username: "john_doe",
  password: "pass123",
});
emitter.emit("userLoggedOut", {
  userId: 2,
  username: "john_doe",
  password: "pass123",
});

console.log("Total userLoggedIn events:", eventCounts.userLoggedIn);
