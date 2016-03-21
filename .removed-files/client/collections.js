PureAdmin.collections = {};

PureAdmin.collections.add = function (name) {
  if(name in PureAdmin.collections) {
    return;
  }
  PureAdmin.collections[name] = new Mongo.Collection(name);
};
