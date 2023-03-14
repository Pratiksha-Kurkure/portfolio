const Contacts = require("./../models/contactModel")

exports.addContact = async (req, res) => {
    try {
        // console.log(req.body);
        const result = await Contacts.create(req.body)
        res.json({
            success: true,
            message: " Contact Created successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
