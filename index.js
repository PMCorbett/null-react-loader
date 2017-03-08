const NullComponent = () => null;

module.exports = function() {
	this.cacheable();
	return NullComponent;
};
module.exports.pitch = function() {
	this.cacheable();
	return NullComponent;
};
