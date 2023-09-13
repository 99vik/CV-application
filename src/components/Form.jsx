import PropTypes from 'prop-types';
import ArrowIcon from '../assets/arrow-right.svg';
import PlusIcon from '../assets/plus-box.svg';
import CloseIcon from '../assets/close-circle.svg';

export default function Form({
  data,
  displayedData,
  changeDisplayFunction,
  handleCvInfoChange,
  addInfoGroup,
  removeInfoGroup,
}) {
  Form.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    displayedData: PropTypes.string,
    changeDisplayFunction: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
    addInfoGroup: PropTypes.func,
    removeInfoGroup: PropTypes.func,
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
            removeInfoGroup={removeInfoGroup}
            data={data}
          />
        );
      case 'experience':
        return (
          <ExperienceInfoGroup
            changeDisplayFunction={changeDisplayFunction}
            handleCvInfoChange={handleCvInfoChange}
            addInfoGroup={addInfoGroup}
            removeInfoGroup={removeInfoGroup}
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

function EducationInfoGroup({
  changeDisplayFunction,
  handleCvInfoChange,
  addInfoGroup,
  removeInfoGroup,
  data,
}) {
  EducationInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
    addInfoGroup: PropTypes.func,
    removeInfoGroup: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
    data: PropTypes.array,
  };

  const inputGroups = data.map((group, index) => {
    return (
      <div className="input-group" key={index}>
        {index !== 0 ? <hr /> : null}
        {index !== 0 && index === data.length - 1 ? (
          <>
            <button
              className="remove-btn"
              onClick={(event) => {
                event.preventDefault();
                removeInfoGroup('education');
              }}
            >
              Remove
              <img src={CloseIcon} alt="close" />
            </button>
          </>
        ) : null}

        <div className="input-group">
          <label htmlFor={'schoolName' + index}>School name</label>
          <input
            type="text"
            name={'schoolName' + index}
            id={'schoolName' + index}
            defaultValue={data[index].schoolName}
            onChange={(event) => {
              handleCvInfoChange(
                'education',
                'schoolName',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'titleOfStudy' + index}>Title of Study</label>
          <input
            type="text"
            name={'titleOfStudy' + index}
            id={'titleOfStudy' + index}
            defaultValue={data[index].titleOfStudy}
            onChange={(event) => {
              handleCvInfoChange(
                'education',
                'titleOfStudy',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'startDate' + index}>Start date</label>
          <input
            type="date"
            name={'startDate' + index}
            id={'startDate' + index}
            defaultValue={data[index].startDate}
            onChange={(event) => {
              handleCvInfoChange(
                'education',
                'startDate',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'finishDate' + index}>Finish date</label>
          <input
            type="date"
            name={'finishDate' + index}
            id={'finishDate' + index}
            defaultValue={data[index].finishDate}
            onChange={(event) => {
              handleCvInfoChange(
                'education',
                'finishDate',
                event.target.value,
                index
              );
            }}
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

function ExperienceInfoGroup({
  changeDisplayFunction,
  handleCvInfoChange,
  addInfoGroup,
  removeInfoGroup,
  data,
}) {
  ExperienceInfoGroup.propTypes = {
    changeDisplayFunction: PropTypes.func,
    addInfoGroup: PropTypes.func,
    removeInfoGroup: PropTypes.func,
    handleCvInfoChange: PropTypes.func,
    data: PropTypes.array,
  };

  const inputGroups = data.map((group, index) => {
    return (
      <div className="input-group" key={index}>
        {index !== 0 ? <hr /> : null}
        {index !== 0 && index === data.length - 1 ? (
          <>
            <button
              className="remove-btn"
              onClick={(event) => {
                event.preventDefault();
                removeInfoGroup('experience');
              }}
            >
              Remove
              <img src={CloseIcon} alt="close" />
            </button>
          </>
        ) : null}

        <div className="input-group">
          <label htmlFor={'companyName' + index}>Company name</label>
          <input
            type="text"
            name={'companyName' + index}
            id={'companyName' + index}
            defaultValue={data[index].companyName}
            onChange={(event) => {
              handleCvInfoChange(
                'experience',
                'companyName',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'positionTitle' + index}>Position title</label>
          <input
            type="text"
            name={'positionTitle' + index}
            id={'positionTitle' + index}
            defaultValue={data[index].positionTitle}
            onChange={(event) => {
              handleCvInfoChange(
                'experience',
                'positionTitle',
                event.target.value,
                index
              );
            }}
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
            defaultValue={data[index].mainResponsibilities}
            onChange={(event) => {
              handleCvInfoChange(
                'experience',
                'mainResponsibilities',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'startDate' + index}>Start date</label>
          <input
            type="date"
            name={'startDate' + index}
            id={'startDate' + index}
            defaultValue={data[index].startDate}
            onChange={(event) => {
              handleCvInfoChange(
                'experience',
                'startDate',
                event.target.value,
                index
              );
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor={'finishDate' + index}>Finish date</label>
          <input
            type="date"
            name={'finishDate' + index}
            id={'finishDate' + index}
            defaultValue={data[index].finishDate}
            onChange={(event) => {
              handleCvInfoChange(
                'experience',
                'finishDate',
                event.target.value,
                index
              );
            }}
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
