import { useState } from 'react';
import Form from './Form';
import { CvInformation as emptyCvInfo } from '../CvInformation';
import PreviewCv from './previewCv';

const displayStates = ['general', 'education', 'experience', 'previewCv'];

export default function CvContainer() {
  const [currentCvDisplay, setCurrentCvDisplay] = useState(displayStates[0]);
  const [CvInformation, setCvInformation] = useState(emptyCvInfo);

  function handleCvInfoChange(infoGroup, information, newValue) {
    const newCvInformation = CvInformation;
    newCvInformation[infoGroup][information] = newValue;
    setCvInformation(newCvInformation);
  }

  return (
    <div className="cv-container">
      <div className="buttons-container">
        <div>
          <button
            className={currentCvDisplay === 'general' ? 'active' : undefined}
            onClick={() => setCurrentCvDisplay(displayStates[0])}
          >
            General
          </button>
          <button
            className={currentCvDisplay === 'education' ? 'active' : undefined}
            onClick={() => setCurrentCvDisplay(displayStates[1])}
          >
            Education
          </button>
          <button
            className={currentCvDisplay === 'experience' ? 'active' : undefined}
            onClick={() => setCurrentCvDisplay(displayStates[2])}
          >
            Professional Experience
          </button>
        </div>
        <button
          className={currentCvDisplay === 'previewCv' ? 'active' : undefined}
          onClick={() => setCurrentCvDisplay(displayStates[3])}
        >
          Preview CV
        </button>
      </div>
      <div className="display-container">
        {currentCvDisplay === 'previewCv' ? (
          <PreviewCv data={CvInformation} />
        ) : (
          <Form
            data={CvInformation[currentCvDisplay]}
            displayedData={currentCvDisplay}
            changeDisplayFunction={setCurrentCvDisplay}
            handleCvInfoChange={handleCvInfoChange}
          />
        )}
      </div>
    </div>
  );
}
