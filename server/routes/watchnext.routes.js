const watchnextController = require('../controllers/watchnext.controller');

module.exports = app => {
  app.post('/api/Users', watchnextController.newUser);
  app.post('/api/Groups', watchnextController.newGroup);
  app.put('/api/Users/:userId', watchnextController.addLikedMovie);
  app.put('/api/Groups/:groupId/members', watchnextController.addMembers);
}