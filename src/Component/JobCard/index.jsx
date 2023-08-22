import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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

        <div className="update-delete-btn">
          <button type="button" className="edit" onClick={() => handleEdit()}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button type="button" className="trash" onClick={() => handleDelete()}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
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
