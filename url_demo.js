const url = require('url');

const theURL = new URL('http://steveng.com.ph:7070//index.html?id=101&status=active');

//Serialized the URL
console.log(theURL.href);
//SAme but string 
console.log(theURL.toString());

//Host {root domain and get the port}
console.log(theURL.host);

//Host name {get the port}
console.log(theURL.hostname);

//Pathname only
console.log(theURL.pathname);

//Serialize Query
console.log(theURL.search);

//Params object
console.log(theURL.searchParams);

//Adding Parameter
theURL.searchParams.append('name','value');
console.log(theURL.searchParams);

//Looping through the Parameter Object
theURL.searchParams.forEach((val, name) => console.log(`${name} : ${val}`));
