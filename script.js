//basic operations
const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    return (y === 0) ? ('ERROR') : (a / b);
};
// operate function
const operate = function(x, a, b) {
    return x(a,b); 
};