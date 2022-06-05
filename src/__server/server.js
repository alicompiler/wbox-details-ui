/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())



app.get('/collection', (req, res) => {
    setTimeout(() => {
        if(req.query.error){
            res.status(400);
            res.send();
            return;
        }
        res.json({
            id: 10,
            name: 'Test Name',
            birthDate: 'September 27',
            phone: 'XXXXXXXXXXXX',
            email: 'testing@email.com',
            address: 'testing address',
            images: [
                {
                    name: 'Face',
                    path: 'image1.jpg'
                },
                {
                    name: 'Full',
                    path: 'image2.jpg'
                }
            ]
        });
    } , 2000);
});

app.listen(8080, () => {
    // eslint-disable-next-line no-console
    console.log('starting wbox-forms test server');
});