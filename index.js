var recipes = {"sandwich":"ham"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var newobj = object
  newobj[key] = value
  return newobj
}

function deleteFromObjectByKey(object, key){
  let x = Object.assign({}, object, { })
  delete x[key]
  return x
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
