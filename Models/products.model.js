const mongoose = require('mongoose');

const productCollection = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['fashion', 'electronic', 'beauty-products', 'watches', 'glassess'],
        required: true
    },
    company_name: {
        type: String,
        enum: [
            // fashion
            'Zara',
            'H&M',
            'Forever 21',
            'Gucci',
            'Levi\'s',
            // Electronic
            'Apple',
            'Samsung',
            'Sony',
            'LG',
            'Microsoft',
            // Beauty Products:
            'L\'Oréal',
            'Estée Lauder',
            'Maybelline',
            'Revlon',
            'Nivea',
            // Watches
            'Rolex',
            'Casio',
            'Seiko',
            'Fossil',
            'Omega',
            // Glasses
            'Ray-Ban',
            'Oakley',
            'Warby Parker',
            'Maui Jim',
            'Persol'
        ]

    },
    price: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        default: '0.0',
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    }

})

module.exports = mongoose.model('products', productCollection);
