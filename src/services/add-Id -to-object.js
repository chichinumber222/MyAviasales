function addIdtoObject() {
  let id = 1000;
  return function (obj) {
    id += 1;
    return { id, ...obj };
  };
}

export default addIdtoObject;
