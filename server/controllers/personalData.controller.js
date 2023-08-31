const personalDataService = require("../services/personalData.service");

exports.findAll = (req, res) => {
    // TODO add logic of course @Luca
    console.log("hallo")

    const personalData = personalDataService.findAll();
    console.log("personalData", personalData);

    res.status(200).send(personalData);
}