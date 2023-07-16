const url = require('url');
const myUrl = new URL('https://mywebsite.com:8080/hello.html?id=100&status=active')

// // Serialized url
// console.log(myUrl.href);
// console.log(myUrl.toString());

// Host (root domain)
// console.log(myUrl.host);

// // Host name (without port)
// console.log(myUrl.hostname);

// // Path name
// console.log(myUrl.pathname);

// // Serialized query
// console.log(myUrl.search);

// Parameters as object
console.log(myUrl.searchParams);

// Append Parameters
myUrl.searchParams.append('abc',123)
console.log(myUrl.href);

// loop params
myUrl.searchParams.forEach((value,name)=> console.log(` ${name} => ${value}`));