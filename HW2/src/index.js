"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employers = require("./employers");

var _cash = require("./cash");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var money = (0, _cash.calcCash)(null, _cash.cash);

var Business =
/*#__PURE__*/
function () {
  function Business(_ref) {
    var _ref$owner = _ref.owner,
        owner = _ref$owner === void 0 ? 'Sam' : _ref$owner,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Victor' : _ref$director,
        _ref$money = _ref.money,
        money = _ref$money === void 0 ? 0 : _ref$money,
        emp = _ref.emp;

    _classCallCheck(this, Business);

    this.owner = owner;
    this.director = director;
    this.money = money;
    this.emp = emp;
  }

  _createClass(Business, [{
    key: "businessinfo",
    value: function businessinfo() {
      var _console;

      var sumSponsors = [].concat(_toConsumableArray(_cash.eu), _toConsumableArray(_cash.rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.money, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(_cash.eu[0], ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var makeBusiness = new Business({
  owner: 'Sam',
  money: money,
  emp: _employers.employersNames
});
makeBusiness.businessinfo();