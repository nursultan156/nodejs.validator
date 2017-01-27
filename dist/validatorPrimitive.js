/**
 * Created by mac on 27.01.17.
 */

//local functions


var isStrictNumber = function (payload) {
    return payload * 1 === payload && payload > -Infinity && payload < Infinity;
};

var isNonStrictNumber = function (payload) {
    return (typeof payload == 'number' || typeof payload == 'string') && payload * 1 == payload && payload !== '' && payload * 1 > -Infinity && payload * 1 < Infinity;
};

var isNull = function (payload) {
    return payload === null;
};

var isUndefined = function (payload) {
    return typeof payload == 'undefined';
};


//exported functions


/**
 * check if payload is strict number and -Infinity<payload<+Infinity
 */
module.exports.isStrictNumber = function (payload) {
    return isStrictNumber(payload);
};

/**
 * check if payload is strict number and 0<payload<+Infinity
 */
module.exports.isStrictPositiveNumber = function (payload) {
    return isStrictNumber(payload) && payload > 0;
};

/**
 * check if payload is strict number and -Infinity<payload<0
 */
module.exports.isStrictNegativeNumber = function (payload) {
    return isStrictNumber(payload) && payload < 0;
};

/**
 * check if payload is numeric or string number -Infinity<payload<+Infinity
 */
module.exports.isNonStrictNumber = function (payload) {
    return isNonStrictNumber(payload);
};

/**
 * check if payload is numeric or string number 0<payload<+Infinity
 */
module.exports.isNonStrictPositiveNumber = function (payload) {
    return isNonStrictNumber(payload) && payload * 1 > 0;
};

/**
 * check if payload is numeric or string number -Infinity<payload<0
 */
module.exports.isNonStrictNegativeNumber = function (payload) {
    return isNonStrictNumber(payload) && payload * 1 < 0;
};

/**
 * check payload===null
 */
module.exports.isNull = function (payload) {
    return isNull(payload);
};

/**
 * check typeof payload == 'undefined'
 */
module.exports.isUndefined = function (payload) {
    return isUndefined(payload);
};