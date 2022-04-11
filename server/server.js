const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 3000;

const messageController = require('./controllers/messageController');
const validationController = require('./controllers/validationController');
const authRouter = require('./routers/authRouter.js');


app.use(express.json());
app.use(cookieParser());

const emoteRouter = express.Router();
app.use('/', emoteRouter);
app.use('/auth', authRouter);




app.use(express.static(path.resolve(__dirname, '../client'))); //serves the index.html

// Create an emote/message
// req.body expected to be object of format: {"message": String}
emoteRouter.post('/feed', validationController.validateMessage, messageController.postMessage, (req, res) => {
  return res.sendStatus(200);
});

//Get emotes/messages
emoteRouter.get('/feed', messageController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.feedData);
});

//Delete emote/message
// expects body with {_id: [id of message to delete]}
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
