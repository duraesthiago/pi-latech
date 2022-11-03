const controller = {
  index: (req, res) => {
    res.render('index', { title: 'PI Latech' });
  }
}

module.exports = controller