import foodModel from '../models/foodMOdel.js'
import fs from 'fs'

// add Food Item

const addFood = async (req, res) => {

    let image_filename = `${req.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: 'Food Added' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

export { addFood }