export const getContractAddress = () => this.props.match.params.address

export const getPatientDetails = async ({
  contract, patientAddress, fromAddress
}) => {
  const patientDetails = await contract.methods.getPatientDetails(patientAddress).call({ from: fromAddress });
  console.log('Getting patient details');
  console.log({ patientDetails });

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

export const createIssuer = async ({
  contract, dataToSend, goTo
}) => {
  await contract.methods.newThirdPartyIssuer(dataToSend.userAddress, dataToSend.institutionName, dataToSend.pais).send({
    from: dataToSend.userAddress
  });

  goTo()
}
