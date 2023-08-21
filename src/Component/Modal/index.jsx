import React, { useState, useEffect } from "react";
import { createJob, updateJob } from "../Api/JobApi";

const Modal = ({
  isOpen,
  onClose,
  editingJobId,
  jobs,
  updateJobsList,
  fetchJobData,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [remoteType, setRemoteType] = useState("");
  const [minExperience, setminExperience] = useState("");
  const [maxExperience, setmaxExperience] = useState("");
  const [minSalary, setminSalary] = useState("");
  const [maxSalary, setmaxSalary] = useState("");
  const [employe, setEmploye] = useState("");
  const [applyType, setApplyType] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      companyName: companyName,
      industry: industry,
      location: location,
      remoteType: remoteType,
      minExperience: minExperience,
      maxExperience: maxExperience,
      minSalary: minSalary,
      maxSalary: maxSalary,
      employe: employe,
      applyType: applyType,
    };

    try {
      if (editingJobId) {
        const response = await updateJob(editingJobId, formData);
        console.log("updated successfully:", response);
        onClose();
        updateJobsList();
      } else {
        const response = await createJob(formData);
        console.log("created successfully:", response);
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.log("API error:", error);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    // if (!submitted) {
    //   setSubmitted(true);
    //   console.log("field is required");
    //   // return;
    // }
    // else{
    //   console.log("nex step");
    //   setCurrentStep((prevStep) => prevStep + 1);
    // }
    if (currentStep < 2) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    if (editingJobId !== null && jobs) {
      const jobToEdit = jobs.find((job) => job.id === editingJobId);
      if (jobToEdit) {
        setTitle(jobToEdit.title);
        setCompanyName(jobToEdit.companyName);
        setIndustry(jobToEdit.industry);
        setLocation(jobToEdit.location);
        setRemoteType(jobToEdit.remoteType);
        setminExperience(jobToEdit.minExperience);
        setmaxExperience(jobToEdit.maxExperience);
        setminSalary(jobToEdit.minSalary);
        setmaxSalary(jobToEdit.maxSalary);
        setEmploye(jobToEdit.employe);
        setApplyType(jobToEdit.applyType);
      } else {
        console.log(`No job found with ID ${editingJobId}`);
      }
    } else {
      setTitle("");
      setCompanyName("");
      setIndustry("");
      setLocation("");
      setRemoteType("");
      setminExperience("");
      setmaxExperience("");
      setminSalary("");
      setmaxSalary("");
      setEmploye("");
      setApplyType("");
    }
  }, [editingJobId, jobs]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <div className="form-header">
                <span className="title">Create a job</span>
                <span className="sub-title">Step {currentStep}</span>
              </div>

              {currentStep === 1 && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      Job Title <sup>*</sup>
                    </label>
                    <input
                      className="form-input"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="ex. UX UI Designer"
                    />
                    {submitted && title.length === 0 && (
                      <span className="error-msg">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Company Name <sup>*</sup>
                    </label>
                    <input
                      className="form-input"
                      name="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="ex. Google"
                    />
                    {submitted && companyName.length === 0 && (
                      <span className="error-msg">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Industry<sup>*</sup>
                    </label>
                    <input
                      className="form-input"
                      name="industry"
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="ex. Information Technology"
                    />
                    {submitted && industry.length === 0 && (
                      <span className="error-msg">This field is required</span>
                    )}
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <label className="form-label">
                        Location<sup>*</sup>
                      </label>
                      <input
                        className="form-input"
                        name="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="ex. Information Technology"
                      />
                      {submitted && location.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Remote Type</label>
                      <input
                        className="form-input"
                        name="remoteType"
                        type="text"
                        value={remoteType}
                        onChange={(e) => setRemoteType(e.target.value)}
                        placeholder="ex. Information Technology"
                      />
                      {submitted && remoteType.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={handleNextStep}
                    disabled={submitted}
                  >
                    Next
                  </button>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <label className="form-label">
                    Experience <sup>*</sup>
                  </label>
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-input"
                        name="minExperience"
                        type="number"
                        value={minExperience}
                        onChange={(e) => setminExperience(e.target.value)}
                        placeholder="Minimum"
                      />
                      {submitted && minExperience.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-input"
                        name="maxExperience"
                        type="number"
                        value={maxExperience}
                        onChange={(e) => setmaxExperience(e.target.value)}
                        placeholder="Maximum"
                      />
                      {submitted && maxExperience.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <label className="form-label">
                    Salary <sup>*</sup>
                  </label>
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-input"
                        name="minSalary"
                        type="number"
                        value={minSalary}
                        onChange={(e) => setminSalary(e.target.value)}
                        placeholder="Minimum"
                      />
                      {submitted && minSalary.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        className="form-input"
                        name="maxSalary"
                        type="number"
                        value={maxSalary}
                        onChange={(e) => setmaxSalary(e.target.value)}
                        placeholder="Maximum"
                      />
                      {submitted && maxSalary.length === 0 && (
                        <span className="error-msg">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Total Employe<sup>*</sup>
                    </label>
                    <input
                      className="form-input"
                      name="employe"
                      type="number"
                      value={employe}
                      onChange={(e) => setEmploye(e.target.value)}
                      placeholder="ex. 100"
                    />
                    {submitted && employe.length === 0 && (
                      <span className="error-msg">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Apply Type<sup>*</sup>
                    </label>
                    <div className="form-radio">
                      <div className="input-check">
                        <input
                          className="radio"
                          name="applyType"
                          id="radio1"
                          type="radio"
                          value="Quick Apply"
                          checked={applyType === "Quick Apply"}
                          onChange={(e) => setApplyType(e.target.value)}
                        />
                        <label htmlFor="radio1">Quick Apply</label>
                      </div>
                      <div className="input-check">
                        <input
                          className="radio"
                          name="applyType"
                          id="radio2"
                          type="radio"
                          value="Externaly Apply"
                          checked={applyType === "Externaly Apply"}
                          onChange={(e) => setApplyType(e.target.value)}
                        />
                        <label htmlFor="radio2">Externaly Apply</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="primary-btn">
                    Submit
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
