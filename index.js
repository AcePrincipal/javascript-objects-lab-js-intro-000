var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object, {[key]: value});
  return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
<<<<<<< HEAD
function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
>>>>>>> 057a377f4f7e63f08ccf4473443b6ba276c59a86
