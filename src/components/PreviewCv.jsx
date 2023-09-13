import PropTypes from 'prop-types';

export default function PreviewCv({ data, changeDisplayFunction }) {
  PreviewCv.propTypes = {
    data: PropTypes.object,
    changeDisplayFunction: PropTypes.func,
  };

  function generateGeneralInfo(generalInfo, changeDisplayFunction) {
    return (
      <div>
        <h1>General information</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeDisplayFunction('general');
          }}
        >
          Edit
        </button>
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

  function generateEducationInfo(educationInfo, changeDisplayFunction) {
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
            <p className="label">Finish date: </p>
            <p>{group.finishDate ? group.finishDate : '-'}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Education information</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeDisplayFunction('education');
          }}
        >
          Edit
        </button>
        {groupOutput}
      </div>
    );
  }

  function generateExperienceInfo(experienceInfo, changeDisplayFunction) {
    const groupOutput = experienceInfo.map((group, index) => {
      return (
        <div key={index} className="group-info">
          {index !== 0 ? <hr /> : null}
          <div className="info-container">
            <p className="label">Company name: </p>
            <p>{group.companyName ? group.companyName : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Position title: </p>
            <p>{group.positionTitle ? group.positionTitle : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Responsibilities: </p>
            <p>
              {group.mainResponsibilities ? group.mainResponsibilities : '-'}
            </p>
          </div>
          <div className="info-container">
            <p className="label">Start date:: </p>
            <p>{group.startDate ? group.startDate : '-'}</p>
          </div>
          <div className="info-container">
            <p className="label">Finish date: </p>
            <p>{group.finishDate ? group.finishDate : '-'}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Professional experience</h1>
        <button
          onClick={(event) => {
            event.preventDefault();
            changeDisplayFunction('experience');
          }}
        >
          Edit
        </button>
        {groupOutput}
      </div>
    );
  }

  return (
    <div className="cv-preview">
      <button
        onClick={() => {
          alert('Not working');
        }}
      >
        Generate PDF
      </button>
      {generateGeneralInfo(data.general, changeDisplayFunction)}
      {generateEducationInfo(data.education, changeDisplayFunction)}
      {generateExperienceInfo(data.experience, changeDisplayFunction)}
    </div>
  );
}
