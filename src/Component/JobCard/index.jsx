import React from "react";
import PropTypes from "prop-types";

const JobCard = ({
  logoSrc,
  jobTitle,
  companyName,
  location,
  schedule,
  experience,
  employees,
  handleDelete,
  handleEdit,
}) => (
  <div className="job-card">
    <div className="company-logo">
      <img src={logoSrc} alt={companyName} />
    </div>
    <div className="card-body">
      <div className="content-wrapper">
        <h2 className="job-title">{jobTitle}</h2>
        <h2 className="sub-title">{companyName}</h2>
        <span className="location">{location}</span>
        <p className="info-text">{schedule}</p>
        <p className="info-text">{experience}</p>
        <p className="info-text">{employees}</p>
      </div>
      <div className="button-wrapper">
        <button type="button" className="primary-btn">
          Apply Now
        </button>
        <button type="button" className="secondary-btn">
          External Apply
        </button>
        <button
          type="button"
          className="primary-btn"
          onClick={() => handleDelete()} 
        >
          Delete
        </button>
        <button
          type="button"
          className="primary-btn"
          onClick={() => handleEdit()} 
        >
          Edit
        </button>
      </div>
    </div>
  </div>
);

JobCard.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  employees: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default JobCard;
