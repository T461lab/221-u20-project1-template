{
    const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

let personController = require('./controller/feedController');
app.get("/api/feed", (req, res) => { 
    res.send(JSON.stringify(feedController.feed));
})
app.route('/api/feed')
   .get(feedController.getAllUsers)
   .post(feedControler.saveUser)
app.route('/api/feed/:id')
//  app.route('/api/users/:usersId')  
// .get(users.getUser)
app.listen(1337, () => console.log('Listening on port 1337.'))
}