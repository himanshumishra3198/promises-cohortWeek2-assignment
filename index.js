// promisified version of setTimeout
function wait(miliseconds) {
  const promise = new Promise(function (resolve, reject) {
    if (!miliseconds) {
      const err = new Error("Time in miliseconds to delay not available");
      reject(err);
    }
    setTimeout(resolve, miliseconds);
  });
  return promise;
}

wait(2000).then(function () {
  console.log("Hello there after 2 seconds");
});

// promisified version of fetch function
fetch("https://api.github.com/users/himanshumishra3198")
  .then((data) => data.json())
  .then((data) => {
    console.log(`your github username: ${data.login}`);
    console.log(`your name: ${data.name}`);
  })
  .catch((err) => {
    console.log(err);
  });

// promisified version of fs.readFile
const fs = require("fs");
function readFileAsync(filePath, encoding = "utf-8") {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
  return promise;
}

readFileAsync("input.txt")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
