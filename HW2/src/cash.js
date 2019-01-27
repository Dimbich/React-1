"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = calcCash;
exports.rus = exports.eu = exports.cash = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;
exports.cash = cash;

function calcCash(own, everyCash) {
  var total = everyCash.reduce(function (sum, current) {
    return sum + current;
  }, own);
  return total;
}