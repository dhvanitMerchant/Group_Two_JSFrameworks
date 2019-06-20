const mongoose = require('mongoose');
const ArcadeGameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    enum: ['FIGHTING', 'SPORTS', 'PUZZLE', 'ARCADE', 'PLATFORMER', 'OTHER'],
    default: 'FIGHTING'
  }
}, {
  timestamps: true
});

//[fighting, sports, strategy, puzzle, arcade, platformer, other]

// Query helper
ArcadeGameSchema.query.drafts = function () {
  return this.where({
    status: 'DRAFT'
  });
};

ArcadeGameSchema.query.published = function () {
  return this.where({
    status: 'PUBLISHED'
  });
};

module.exports = mongoose.model('ArcadeGame', ArcadeGameSchema);