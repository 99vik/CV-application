import PropTypes from 'prop-types';

export default function PreviewCv({ data }) {
  PreviewCv.propTypes = {
    data: PropTypes.object,
  };

  function generateGeneralInfo(generalInfo) {
    return (
      <div>
        <h1>General information</h1>
        <div className="info-container">
          <p className="label">First name: </p>
          <p>{generalInfo.firstName ? generalInfo.firstName : '-'}</p>
        </div>
        <div className="info-container">
          <p className="label">Last name: </p>
          <p>{generalInfo.lastName ? generalInfo.lastName : '-'}</p>
        </div>
        <div className="info-container">
          <p className="label">Birth date: </p>
          <p>{generalInfo.birthDate ? generalInfo.birthDate : '-'}</p>
        </div>
        <div className="info-container">
          <p className="label">Email: </p>
          <p>{generalInfo.email ? generalInfo.email : '-'}</p>
        </div>
        <div className="info-container">
          <p className="label">Phone number: </p>
          <p>{generalInfo.phoneNumber ? generalInfo.phoneNumber : '-'}</p>
        </div>
      </div>
    );
  }

  function generateEducationInfo(educationInfo) {
    const groupOutput = educationInfo.map((group, index) => {
      return (
        <div key={index} className="group-info">
          {index !== 0 ? <hr /> : null}
          <div className="info-container">
            <p className="label">School name: </p>
            <p>{group.schoolName ? group.schoolName : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Title of study: </p>
            <p>{group.titleOfStudy ? group.titleOfStudy : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Start date: </p>
            <p>{group.startDate ? group.startDate : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Finish name: </p>
            <p>{group.finishDate ? group.finishDate : '-'}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Education information</h1>
        {groupOutput}
      </div>
    );
  }

  return (
    <div className="cv-preview">
      {generateGeneralInfo(data.general)}
      {generateEducationInfo(data.education)}
    </div>
  );
}
