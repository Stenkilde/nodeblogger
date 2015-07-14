// Base Setup for the server
var express		= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');
var app			= express();
var port 		= 1337;

mongoose.connect('mongodb://localhost/simple');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

// Router setup
var router 		= express.Router();

var Blog		= require('./models/blog');

// Test route
router.get('/', function(req, res) {
	res.json({ message: 'Get out of here!'});
});

router.route('/blog')
	.post(function(req, res) {
		var blog = new Blog();
		blog.header		= req.body.header;
		blog.body		= req.body.body;
		blog.created_by	= req.body.created_by;

		blog.save(function(err) {
			if(err)
				res.send(err);
			res.json({ message: 'blog post have been added' });
		});
	})
	.get(function(req, res) {
		Blog.find(function(err, blogs) {
			if(err)
				res.send(err);

			res.json(blogs)
		});
	});

router.route('/blog/:blog_id')
	.get(function(req, res) {
		Blog.findById(req.params.blog_id, function(err, blog) {
			if(err)
				res.send(err);

			res.json(blog)
		});
	})
	.delete(function(req, res) {
		Anime.remove({
			_id: req.params.blog_id
		}, function(err, blog) {
			if(err)
				res.send(err);

			res.json({ message: 'I deleted this blog!' });
		});
	});


app.use('/api', router);


// Start the server
app.listen(port);
console.log('We are up and running!');
