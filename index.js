const React = require('react');

const NullComponent = () => <div />;

module.exports = function() {
	this.cacheable();
	console.log('1', NullComponent)
	return NullComponent;
};
module.exports.pitch = function() {
	this.cacheable();
	console.log('2', NullComponent)
	return NullComponent;
};
