//Import Services
const { addVehicle } = require('./services');

exports.addVehicles =  async(req, res, next) => {
    try {
        let { vehicleRegNumber, personName, notes, idType, idNumber} = req.body
        console.log(req.body)
        let vehicleInfo = await addVehicle(personName, vehicleRegNumber, idType, idNumber, notes, 330);
        res.json(vehicleInfo)
    } catch (error) {
        throw error
    }
}