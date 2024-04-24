function receivesAFunction(func) {
    func();
    return 'hi';
}

function hi() {
    console.log('hi');
}

function returnsANamedFunction() {
    return hi;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('hi again');
    }
}

