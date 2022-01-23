function middleware1(req, res, next) {
    req.requestTime = Date.now();
    next()
}

function middleware2(req, res, next) {
    req.requestTime = Date.now();
    next()
}

function middleware3(req, res, next) {
    req.requestTime = Date.now();
    next()
}

module.exports = {
    middleware1: middleware1,
    middleware2: middleware2,
    middleware3: middleware3
}
