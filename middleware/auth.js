function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	if (req.session && req.session.isloggedIn) {
	// If the user is logged in, call next()
		return next()
	// If the user is not logged in, redirect to /login
	  } else {
		res.redirect('/login');
	  }
}

module.exports = checkAuth