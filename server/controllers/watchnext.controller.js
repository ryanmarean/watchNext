const { User } = require('../models/user.model');
const { Film } = require('../models/film.model');
const { Group } = require('../models/group.model');

module.exports.newUser = (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
}

module.exports.newGroup = (req, res) => {
  Group.create(req.body)
    .then(group => res.json(group))
    .catch(err => res.json(err));
}

module.exports.addLikedMovie = (req, res) => {
  User.findOne({_id: req.params.userId})
    .then(userToUpdate => {
      userToUpdate.likedFilms.push(req.body.filmId);
      userToUpdate.save()
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
}

module.exports.addMembers = (req, res) => {
  Group.findOne({_id: req.params.groupId})
    .then(groupToUpdate => {
      groupToUpdate.members.push(req.body.userId);
      groupToUpdate.save()
        .then(updatedGroup => res.json(updatedGroup))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
}

module.exports.checkMatch = (req, res) => {
  let matchedFilm = "";
  Group.findOne({_id: req.params.groupId})
    .then(selectedGroup => {
      for (let i = 0; i < selectedGroup.members.length; i++) {
        if (selectedGroup.members[i] == req.body.userId) {
          continue;
        } else {
          User.findOne({_id: selectedGroup.members[i]._id})
            .then(user => {
              for (let j = 0; j < user.likedFilms.length; j++) {
                if (user.likedFilms[i] == req.body.filmId) {
                  matchedFilm = user.likedFilms[i];
                }
              }
              res.json(matchedFilm);
            })
            .catch(err => res.json(err));
        }
      }
    })
    .catch(err => res.json(err))
}