import axios from 'axios';

const API_BASE_URL = 'https://647df243af984710854aa887.mockapi.io/api/v1/job/create-job';

export const createJob = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchJobs = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    const jobsData = response.data;
    return jobsData;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const deleteJob = async (jobId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${jobId}`);
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};

export const updateJob = async (jobId, formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${jobId}`, formData);
    return response.data;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};