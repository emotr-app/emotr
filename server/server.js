const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const messageController = require('./controllers/messageController');

const emoteRouter = express.Router();
app.use('/', emoteRouter);

app.use(express.static(path.resolve(__dirname, '../client'))); //serves the index.html

//Create an emote/message
emoteRouter.post('/feed', messageController.postMessage, (req, res) => {

});

//Get emotes/messages
emoteRouter.get('/feed', messageController.getMessages, (req, res) => {

});

//Delete emote/message
emoteRouter.delete('/feed/:id', messageController.deleteMessage, (req, res) => {

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
