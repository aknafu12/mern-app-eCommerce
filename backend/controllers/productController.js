exports.getAllProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: ' This will show all products in database '
    });
};