import axios from "axios";
import {expect} from "chai";

const baseUrl = 'http://localhost:3000'; // Replace with your API base URL

describe('Person API Integration Tests', () => {
    let newPersonId;

    it('should add a new person', async () => {
        const newPersonData = {
            name: 'John Doe',
            firstName: 'John',
            birthdate: '1990-01-01',
            address: '123 Main St',
        };

        const response = await axios.post(`${baseUrl}/persons`, newPersonData);
        expect(response.status).to.equal(201);

        newPersonId = response.data.id;
    });

    it('should delete an existing person', async () => {
        const response = await axios.delete(`${baseUrl}/persons/${newPersonId}`);
        expect(response.status).to.equal(204);
    });

    it('should update an existing person\'s information', async () => {
        const updatedPersonData = {
            name: 'Luca',
        };

        const response = await axios.put(`${baseUrl}/persons/${newPersonId}`, updatedPersonData);
        expect(response.status).to.equal(200);
    });

    it('should display a list of all persons', async () => {
        const expectedDataFromDatabase = []; // Replace with your expected data

        const response = await axios.get(`${baseUrl}/persons`);
        expect(response.status).to.equal(200);

        const displayedPersons = response.data;
        expect(displayedPersons).to.deep.equal(expectedDataFromDatabase);
    });

    it("should return all personal data with status 200", async () => {
        const response = await axios.get(`${baseUrl}/ `);
        console.log("response", response);
        expect(response.status).to.equal(200);
    })
});
