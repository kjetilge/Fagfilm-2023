// create a component named licence-status
// this component will display the licence status of the user
// this component will be used in the header component

import getLicenseStatus from '@/utils/get-license-status';

const LicenceStatus = () => {
  const licenseStatus = getLicenseStatus();
  return (
    <div className="licence-status">
      <span className="licence-status__text">Licence Status:</span>
      <span className="licence-status__status">{licenseStatus}</span>
    </div>
  );
}

export default LicenceStatus;
