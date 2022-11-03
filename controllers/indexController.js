const controller = {
  index: (req, res) => {
    res.render('index', { title: 'Latech' });
  }
}

module.exports = controller