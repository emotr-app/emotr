const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const messageController = require('./controllers/messageController');

app.use(express.json());

const emoteRouter = express.Router();
app.use('/', emoteRouter);

app.use(express.static(path.resolve(__dirname, '../client'))); //serves the index.html

// Create an emote/message
// req.body expected to be object of format: {"message": String}
emoteRouter.post('/feed', messageController.postMessage, (req, res) => {
  return res.sendStatus(200);
});

//Get emotes/messages
emoteRouter.get('/feed', messageController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.feedData);
});

//Delete emote/message
emoteRouter.delete('/feed', messageController.deleteMessage, (req, res) => {
  return res.sendStatus(200);
});


//Unknown route handler
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occured' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

//Start server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
