// export function requestTime(req, res, next) {
//     req.requestTime = Date.now();
//     next();
// }
//
// export function logger(req, res, next) {}






// let myLogger = function (req, res, next) {
//     console.log('LOGGED');
//     next();
// };


function middleware1(req, res, next) { req.requestTime = Date.now(); next() }
function middleware2(req, res, next) { req.requestTime = Date.now(); next() }
function middleware3(req, res, next) { req.requestTime = Date.now(); next() }

module.exports = {
    middleware1 : middleware1,
    middleware2 : middleware2,
    middleware3 : middleware3
}
