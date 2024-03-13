const express = require("express");
const app = express();
const bodyParser = require("body-parser");



const cors = require('cors');
const corsOptions = {
    origin: 'https://mechanized-aesthetics.net/',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use(express.json());
app.use(bodyParser.json());

app.post("/change/:amount", (req, res) => {
    let amount = req.params.amount;
    amount = Number(amount).toFixed(2);


    let total = amount * 100;
    const silverDollar = 100;
    const halfDollar = 50;
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
    let halfDollarQuotient = Number(0);
    let quarterQuotient = Number(0);
    let dimeQuotient = Number(0);
    let nickelQuotient = Number(0);


    let SilverDollarQuotient = Math.floor(total / silverDollar);
    let remainder = total % silverDollar;



    if (remainder / halfDollar >= 1) {
        halfDollarQuotient = Math.floor(remainder / halfDollar);
        subtract = halfDollarQuotient * halfDollar;
        remainder = remainder - subtract;
    }


    if (remainder / quarter >= 1) {
        quarterQuotient = Math.floor(remainder / quarter);
        subtract = quarterQuotient * quarter;
        remainder = remainder - subtract;
    }


    if (remainder / dime >= 1) {
        dimeQuotient = Math.floor(remainder / dime);
        subtract = dimeQuotient * dime;
        remainder = remainder - subtract;

    }


    if (remainder / nickel >= 1) {
        nickelQuotient = Math.floor(remainder / nickel);
        subtract = nickelQuotient * nickel;
        remainder = remainder - subtract;
    }


    let data = {
        total: total,
        SilverDollarQuotient,
        halfDollarQuotient,
        quarterQuotient,
        dimeQuotient,
        nickelQuotient,
        remainder

    }

    res.status(200).send(data);


})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`You fired up PORT ${PORT} successfully.`));
