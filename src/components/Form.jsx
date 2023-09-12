import PropTypes from 'prop-types';

export default function Form({ data, displayedData }) {
  Form.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    displayedData: PropTypes.string,
  };

  function displayInputGroup() {
    switch (displayedData) {
      case 'general':
        return <GeneralInfoGroup />;
      case 'education':
        return <EducationInfoGroup />;
      case 'experience':
        return <ExperienceInfoGroup />;
    }
  }

  console.log(data);

  return <form action="">{displayInputGroup()}</form>;
}

function GeneralInfoGroup() {
  return (
    <>
      <div className="input-group">
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div className="input-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div className="input-group">
        <label htmlFor="birthDate">Date of birth</label>
        <input type="date" name="birthDate" id="birthDate" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
      </div>
    </>
  );
}

function EducationInfoGroup() {
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
    </>
  );
}

function ExperienceInfoGroup() {
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
    </>
  );
}
