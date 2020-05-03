import { createContract } from './mhdContract';

export class MyHeathData {
  getContractAddress() {
    return this.props.match.params.address;
  }

  async getPatientDetails(contractAddress, patientAddress, fromAddress) {
    const contract = createContract(contractAddress);


    console.log('Getting patient details');
    const patientDetails = await contract.methods.getPatientDetails(patientAddress).call({ from: fromAddress });
    const dateOfBirth = patientDetails[0];
    const genderOfBirth = patientDetails[1];
    const cityOfBirth = patientDetails[2];
    const countryOfBirth = patientDetails[3];
    const ethnicity = patientDetails[4];

    console.log(dateOfBirth);
    console.log(genderOfBirth);
    console.log(cityOfBirth);
    console.log(countryOfBirth);
    console.log(ethnicity);
  }
}
