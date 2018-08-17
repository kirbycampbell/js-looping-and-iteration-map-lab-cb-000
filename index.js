// Code your solution in this file.
function lowerCaseDrivers(collection){
  return collection.map(function (item) {
    return item.toLowerCase();
  });
}

function nameToAttributes(collection){
  return collection.map(function (item) {
    return Object.assign({}, item.firstName, item.lastName);
  });
}
