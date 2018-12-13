"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HashMap =
/*#__PURE__*/
function () {
  function HashMap(capacity) {
    _classCallCheck(this, HashMap);

    this.capacity = capacity;
    this.buckets = [];
  } // If key exist returns value of key of not exist returns undefined


  _createClass(HashMap, [{
    key: "get",
    value: function get(key) {
      var index = this.hashFunction(key, this.capacity);

      if (this.buckets[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i][0] === key) {
            return this.buckets[index][i][1];
          }
        }
      }
    }
  }, {
    key: "add",
    value: function add(key, value) {
      var index = this.hashFunction(key, this.capacity); // if the bucket is empty puts record here

      if (this.buckets[index] === undefined) {
        this.buckets[index] = [[key, value]];
      } else {
        // if the bucket is not empty but you typed the same key then edit value of key
        var inserted = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.buckets[index][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var iterator = _step.value;

            if (iterator[0] === key) {
              iterator[1] = value;
              inserted = true;
            }
          } // if there is colision push item at the end of the bucket

        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (inserted === false) {
          this.buckets[index].push([key, value]);
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var index = this.hashFunction(key, this.capacity);

      if (this.buckets[index].length === 1 && this.buckets[index][0][0] === key) {
        delete this.buckets[index];
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.buckets[index][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var iterator = _step2.value;

            if (iterator[0] === key) {
              console.log(this.bucket[index]);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      console.log(this.buckets);
    }
  }, {
    key: "hashFunction",
    value: function hashFunction(string, capacity) {
      var hash = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = string[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var char = _step3.value;
          hash += string.charCodeAt(char);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return hash % capacity;
    }
  }]);

  return HashMap;
}(); // export default HashMap;
