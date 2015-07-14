var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var BlogSchema	= new Schema({
	header: String,
	body: String,
	created_by: String
});

module.exports = mongoose.model('Blog', BlogSchema);