let express = require('express');
let cors = require('cors');
let app = express();
let users = [{ id: 1, name: 'zyx' }, { id: 2, name: 'lh' }];
app.use(cors({
    origin: 'http://localhost:3003'
}))
app.get('/api/users', function (req, res) {
    res.json(users);

});
app.listen(4000);