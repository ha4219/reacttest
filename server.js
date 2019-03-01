const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'jeong',
            'bir':'11',
            'gender':'male',
            'job':'dd',
            },
            {
              'id':2,
              'image':'https://placeimg.com/64/64/2',
              'name':'jeong',
              'bir':'11',
              'gender':'male',
              'job':'dd',
            },
            {
              'id':3,
              'image':'https://placeimg.com/64/64/3',
              'name':'jeong',
              'bir':'11',
              'gender':'male',
              'job':'dd',
            }
        ]);
});

app.listen(port, () => console.log(`listening on port ${port}`));