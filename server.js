const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('hello get') });

app.post('/', (req, res) => { res.send('hello post') });

app.put('/', (req, res) => { res.send('hello put') });

app.delete('/', (req, res) => { res.send('hello delete') });

app.listen(1337, () => { console.log('app listen in 1337', 1337) });

