(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxWeappPagination = nx.declare('nx.WeappPagination', {
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappPagination;
  }

}());
