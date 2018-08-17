// Code your solution in this file.
function lowerCaseDrivers(collection){
  return collection.map(function (item) {
    return item.toLowerCase();
  });
}

function splitName(fullname){
  return fullname.split(" ")
}

//function nameToAttributes(collection){
//  return collection.map(function (item) {
//    return Object.assign({}, {firstName: splitName(item)[0])}, {lastName: splitName(item)[1])});
//  });
//}
