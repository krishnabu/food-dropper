// server.js
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51PHiNASIDM3MQrk01HMmhlec0tn8QVretf5GSVcmbVnBK5p76tNifUo3xxkuZ3A9RVbnkMaHZJ42qRr8S3NPa2xq0014P7grgM');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
    const { products,baseUrl } = req.body;
    
    // Debugging: print product info

    const lineItems = products.map((item) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item?.card?.info?.name
            },
            unit_amount: item?.card?.info?.price || 0,
        },
        quantity: 1, // Assuming each item has a quantity of 1. Adjust as needed.
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${baseUrl}/success`,
            cancel_url: `${baseUrl}/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
