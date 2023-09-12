import { useState } from 'react';
import Form from './Form';
import { CvInformation as emptyCvInfo } from '../CvInformation';
import PreviewCv from './previewCv';

const displayStates = ['general', 'education', 'experience', 'previewCv'];

export default function CvContainer() {
  const [currentCvDisplay, setCurrentCvDisplay] = useState(displayStates[0]);
  const [CvInformation, setCvInformation] = useState(emptyCvInfo);

  return (
    <div className="cv-container">
      <div className="buttons-container">
        <div>
          <button onClick={() => setCurrentCvDisplay(displayStates[0])}>
            General
          </button>
          <button onClick={() => setCurrentCvDisplay(displayStates[1])}>
            Education
          </button>
          <button onClick={() => setCurrentCvDisplay(displayStates[2])}>
            Professional Experience
          </button>
        </div>
        <button onClick={() => setCurrentCvDisplay(displayStates[3])}>
          Preview CV
        </button>
      </div>
      {currentCvDisplay === 'previewCv' ? (
        <PreviewCv data={CvInformation} />
      ) : (
        <Form
          data={CvInformation[currentCvDisplay]}
          displayedData={currentCvDisplay}
        />
      )}
    </div>
  );
}
