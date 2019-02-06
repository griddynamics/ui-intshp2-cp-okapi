module.exports = {
    getAccounts,
    getRoles,
    getBlogs,
    notFound,
    // getById
}

function getAccounts(req, res) {
    res.json(require('./dummy-data/accounts.json'));
}

function getRoles(req, res) {
    res.json(require('./dummy-data/roles.json'));
}

function getBlogs(req, res) {
    res.json(require('./dummy-data/blogs.json'));
}

function notFound(req, res) {
    res.status(404).send();
}

// function getById(req, res) {
//     console.log(req, res)
//     const test = null;

//     res.json(require(test))
// }
