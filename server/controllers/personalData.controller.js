import {findAll as findAllPersonalData} from "../services/personalData.service";

export function findAll(req, res) {
    // TODO add logic of course @Filipe
    console.log("hallo")

    const personalData = findAllPersonalData();
    console.log("personalData", personalData);

    res.status(200).send(personalData);
}