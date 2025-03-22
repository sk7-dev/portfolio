const firstName = 'Shiv Karthee';
const lastName = 'Janardhanan';
const suffix = 'Shiv';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
