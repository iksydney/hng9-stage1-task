const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.get('/', intro);

function intro(req, res, next){
    return res.json({
        slackUsername: "cindicate",
        backend: true,
        age: 30,
        bio: "Always working and finding solutions to challenges that builds me as a person and also to the growth of my workplace, my day to day activities has emphasis on professionalism, training, hard-work, dedication and most importantly achievement of goals that has been set out.,Belief in,teamwork approach to achieve efficiency and availability of adequate technology support to carry out assigned tasks using personal initiative and requiring minimal, supervision."
    });
}

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
