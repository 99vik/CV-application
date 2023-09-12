import PropTypes from 'prop-types';

export default function PreviewCv({ data }) {
  PreviewCv.propTypes = {
    data: PropTypes.object,
  };

  console.log(data);

  return (
    <div className="cv-preview">
      <p>CV preview</p>
    </div>
  );
}
