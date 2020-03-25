const Date = require('../../helpers/dateTime')
const VehicleModel = require('./models')

exports.addVehicle = async(personName, vehicleRegNumber,idType, idNumber, note, timeZoneOffset) => {
    try {
        let vehicleInfo = await VehicleModel.where({vehicleRegNumber: vehicleRegNumber}).findOne();

        if(!vehicleInfo){
            let dateObj = new Date(timeZoneOffset);

            let valueObject = Object.freeze({
                vehicleRegNumber:vehicleRegNumber,
                personName : personName, 
                note: note, 
                personId: {
                    type: idType,
                    idNumber: idNumber
                },
                timeStamp:{
                date: dateObj.getFormatedDate(),
                time: dateObj.getFormatedTime()
                }
            })

            let vehicleData = await VehicleModel.create(valueObject)

            let returnObj = Object.freeze({
                status: true, multipleVisit: false, data: vehicleData
            })
            return returnObj;
        } else {
            vehicleInfo.visitCount = vehicleInfo.visitCount + 1;
            await VehicleModel.where({_id: vehicleInfo._id}).findOneAndUpdate(vehicleInfo);
            let returnObj = Object.freeze({
                status: true, multipleVisit: true, data: vehicleInfo
            })
            return returnObj;
        }
    } catch (error) {
        throw error;
    }
   
}

