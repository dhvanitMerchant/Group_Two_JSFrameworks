const ArcadeGame = require('../models/arcadeGame');

exports.new = (req, res) => {
  res.render('arcadeGames/new', {
    title: 'New Arcade Game Post'
  });
};

exports.index = (req, res) => {
  ArcadeGame.find()
    .then(arcadeGames => {
      res.render('arcadeGames/index', {
        arcadeGames: arcadeGames,
        title: 'Arcade Games'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.show = (req, res) => {
  ArcadeGame.findById(req.params.id)
    .then(arcadeGame => {
      res.render('arcadeGames/show', {
        title: arcadeGame.title,
        arcadeGame: arcadeGame
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};

exports.create = (req, res) => {
  ArcadeGame.create(req.body.arcadeGame)
    .then(() => {
      req.flash('success', 'Your new arcadeGame was created successfully.');
      res.redirect('/arcadeGames');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('arcadeGames/new', {
        arcadeGame: req.body.arcadeGame,
        title: 'New arcadeGame'
      });
    });
};
//['FIGHTING', 'SPORTS', 'PUZZLE', 'ARCADE', 'PLATFORMER', 'OTHER'],
exports.fightings = (req, res) => {
  ArcadeGame.find().fightings()
    .then(drafts => {
      res.render('arcadeGames/index', {
        title: 'Fightings',
        arcadeGames: fightings
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};

exports.sports = (req, res) => {
  ArcadeGame.find().sports()
    .then(published => {
      res.render('arcadeGames/index', {
        title: 'Sports',
        arcadeGames: sports
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};
exports.puzzle = (req, res) => {
  ArcadeGame.find().puzzle()
    .then(published => {
      res.render('arcadeGames/index', {
        title: 'Puzzle',
        arcadeGames: puzzle
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};
exports.arcade = (req, res) => {
  ArcadeGame.find().arcade()
    .then(published => {
      res.render('arcadeGames/index', {
        title: 'Arcade',
        arcadeGames: arcade
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};
exports.platformer = (req, res) => {
  ArcadeGame.find().platformer()
    .then(published => {
      res.render('arcadeGames/index', {
        title: 'Platformer',
        arcadeGames: platformer
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};
exports.other = (req, res) => {
  ArcadeGame.find().other()
    .then(published => {
      res.render('arcadeGames/index', {
        title: 'Other',
        arcadeGames: other
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};
exports.edit = (req, res) => {
  ArcadeGame.findById(req.params.id)
    .then(arcadeGame => {
      res.render('arcadeGames/edit', {
        title: `Edit ${arcadeGame.title}`,
        arcadeGame: arcadeGame
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};

exports.update = (req, res) => {
  ArcadeGame.updateOne({
      _id: req.body.id
    }, req.body.arcadeGame, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'Your arcadeGame was updated successfully.');
      res.redirect('/arcadeGames');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('arcadeGames/edit', {
        arcadeGame: req.body.arcadeGame,
        title: `Edit ${req.body.arcadeGame.title}`
      });
    });
};

exports.destroy = (req, res) => {
  ArcadeGame.deleteOne({
      _id: req.body.id
    })
    .then(() => {
      req.flash('success', 'Your arcadeGame was deleted successfully.');
      res.redirect("/arcadeGames");
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadeGames');
    });
};