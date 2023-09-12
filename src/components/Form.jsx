import PropTypes from 'prop-types';
import ArrowIcon from '../assets/arrow-right.svg';

export default function Form({
  data,
  displayedData,
  changeDisplayFunction,
  handleCvInfoChange,
}) {
  Form.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    displayedData: PropTypes.string,
    changeDisplayFunction: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
  };

  function displayInputGroup() {
    switch (displayedData) {
      case 'general':
        return (
          <GeneralInfoGroup
            changeDisplayFunction={changeDisplayFunction}
            handleCvInfoChange={handleCvInfoChange}
            data={data}
          />
        );
      case 'education':
        return (
          <EducationInfoGroup
            changeDisplayFunction={changeDisplayFunction}
            handleCvInfoChange={handleCvInfoChange}
          />
        );
      case 'experience':
        return (
          <ExperienceInfoGroup
            changeDisplayFunction={changeDisplayFunction}
            handleCvInfoChange={handleCvInfoChange}
          />
        );
    }
  }

  console.log(data);

  return <form action="">{displayInputGroup()}</form>;
}

function GeneralInfoGroup({ changeDisplayFunction, handleCvInfoChange, data }) {
  GeneralInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
    data: PropTypes.object,
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={data.firstName}
          onChange={(event) => {
            handleCvInfoChange('general', 'firstName', event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={data.lastName}
          onChange={(event) => {
            handleCvInfoChange('general', 'lastName', event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="birthDate">Date of birth</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          defaultValue={data.birthDate}
          onChange={(event) => {
            handleCvInfoChange('general', 'birthDate', event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={data.email}
          onChange={(event) => {
            handleCvInfoChange('general', 'email', event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          defaultValue={data.phoneNumber}
          onChange={(event) => {
            handleCvInfoChange('general', 'phoneNumber', event.target.value);
          }}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault;
          changeDisplayFunction('education');
        }}
      >
        Education <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}

function EducationInfoGroup({ changeDisplayFunction }) {
  EducationInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor="schoolName">School name</label>
        <input type="text" name="schoolName" id="schoolName" />
      </div>
      <div className="input-group">
        <label htmlFor="titleOfStudy">Title of Study</label>
        <input type="text" name="titleOfStudy" id="titleOfStudy" />
      </div>
      <div className="input-group">
        <label htmlFor="startDate">Start date</label>
        <input type="date" name="startDate" id="startDate" />
      </div>
      <div className="input-group">
        <label htmlFor="finishDate">Finish date</label>
        <input type="date" name="finishDate" id="finishDate" />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault;
          changeDisplayFunction('experience');
        }}
      >
        Professional experience <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}

function ExperienceInfoGroup({ changeDisplayFunction }) {
  ExperienceInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor="companyName">Company name</label>
        <input type="text" name="companyName" id="companyName" />
      </div>
      <div className="input-group">
        <label htmlFor="positionTitle">Position title</label>
        <input type="text" name="positionTitle" id="positionTitle" />
      </div>
      <div className="input-group">
        <label htmlFor="mainResponsibilities">Main responsibilities</label>
        <input
          type="text"
          name="mainResponsibilities"
          id="mainResponsibilities"
        />
      </div>
      <div className="input-group">
        <label htmlFor="startDate">Start date</label>
        <input type="date" name="startDate" id="startDate" />
      </div>
      <div className="input-group">
        <label htmlFor="finishDate">Finish date</label>
        <input type="date" name="finishDate" id="finishDate" />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault;
          changeDisplayFunction('previewCv');
        }}
      >
        View your CV
        <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}
