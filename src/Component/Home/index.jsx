import React, { useState, useEffect } from "react";
import Header from "../Header";
import JobCard from "../JobCard";
import { fetchJobs, deleteJob } from "../../Component/Api/JobApi";
import logo from "../../Assets/images/logo/logo.png";
import Modal from "../Modal";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = async () => {
    try {
      const jobsData = await fetchJobs();
      setJobs(jobsData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await deleteJob(jobId);
      fetchJobData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (jobId) => {
    setIsModalOpen(true);
    const jobToEdit = jobs.find((job) => job.id === jobId);
    setEditingJob(jobToEdit);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingJob(null);
    fetchJobData();
  };

  const updateJobsList = async () => {
    try {
      const jobsData = await fetchJobs();
      setJobs(jobsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section className="flex justify-center space space-y-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                logoSrc={logo}
                jobTitle={job.title}
                companyName={job.companyName}
                location={job.location}
                schedule="Part-Time (9.00 am - 5.00 pm IST)"
                experience={`Experience: ${job.minExperience} - ${job.maxExperience} years`}
                employees={`Total Employees: ${job.employe}`}
                handleDelete={() => handleDelete(job.id)}
                handleEdit={() => handleEdit(job.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        editingJobId={editingJob ? editingJob.id : null}
        jobs={jobs}
        updateJobsList={updateJobsList}
        fetchJobData={fetchJobData}
      />
    </>
  );
};

export default JobList;