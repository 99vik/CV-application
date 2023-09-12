import PropTypes from 'prop-types';
import ArrowIcon from '../assets/arrow-right.svg';
import PlusIcon from '../assets/plus-box.svg';

export default function Form({
  data,
  displayedData,
  changeDisplayFunction,
  handleCvInfoChange,
  addInfoGroup,
}) {
  Form.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    displayedData: PropTypes.string,
    changeDisplayFunction: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
    addInfoGroup: PropTypes.func,
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
            addInfoGroup={addInfoGroup}
            data={data}
          />
        );
      case 'experience':
        return (
          <ExperienceInfoGroup
            changeDisplayFunction={changeDisplayFunction}
            handleCvInfoChange={handleCvInfoChange}
            addInfoGroup={addInfoGroup}
            data={data}
          />
        );
    }
  }

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
          event.preventDefault();
          changeDisplayFunction('education');
        }}
      >
        Education <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}

function EducationInfoGroup({ changeDisplayFunction, addInfoGroup, data }) {
  EducationInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
    addInfoGroup: PropTypes.func,
    data: PropTypes.array,
  };

  const inputGroups = data.map((group, index) => {
    return (
      <div className="input-group" key={index}>
        {index !== 0 ? <hr /> : null}
        <div className="input-group">
          <label htmlFor={'schoolName' + index}>School name</label>
          <input
            type="text"
            name={'schoolName' + index}
            id={'schoolName' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'titleOfStudy' + index}>Title of Study</label>
          <input
            type="text"
            name={'titleOfStudy' + index}
            id={'titleOfStudy' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'startDate' + index}>Start date</label>
          <input
            type="date"
            name={'startDate' + index}
            id={'startDate' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'finishDate' + index}>Finish date</label>
          <input
            type="date"
            name={'finishDate' + index}
            id={'finishDate' + index}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          addInfoGroup('education');
        }}
      >
        Add education
        <img src={PlusIcon} alt="plus" />
      </button>
      {inputGroups}

      <button
        onClick={(event) => {
          event.preventDefault();
          changeDisplayFunction('experience');
        }}
      >
        Professional experience <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}

function ExperienceInfoGroup({ changeDisplayFunction, addInfoGroup, data }) {
  ExperienceInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
    addInfoGroup: PropTypes.func,
    data: PropTypes.array,
  };

  const inputGroups = data.map((group, index) => {
    return (
      <div className="input-group" key={index}>
        {index !== 0 ? <hr /> : null}
        <div className="input-group">
          <label htmlFor={'companyName' + index}>Company name</label>
          <input
            type="text"
            name={'companyName' + index}
            id={'companyName' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'positionTitle' + index}>Position title</label>
          <input
            type="text"
            name={'positionTitle' + index}
            id={'positionTitle' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'mainResponsibilities' + index}>
            Main responsibilities
          </label>
          <input
            type="text"
            name={'mainResponsibilities' + index}
            id={'mainResponsibilities' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'startDate' + index}>Start date</label>
          <input
            type="date"
            name={'startDate' + index}
            id={'startDate' + index}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'finishDate' + index}>Finish date</label>
          <input
            type="date"
            name={'finishDate' + index}
            id={'finishDate' + index}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          addInfoGroup('experience');
        }}
      >
        Add job
        <img src={PlusIcon} alt="plus" />
      </button>
      {inputGroups}

      <button
        onClick={(event) => {
          event.preventDefault();
          changeDisplayFunction('previewCv');
        }}
      >
        View your CV
        <img src={ArrowIcon} alt="arrow" />
      </button>
    </>
  );
}
