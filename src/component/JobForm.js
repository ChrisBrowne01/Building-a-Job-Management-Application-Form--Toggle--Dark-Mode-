import { React, useState } from 'react';

export const JobForm = () => {
  const [jobs, setJobValues] = useState([])
  const [newJob, setNewJob] = useState({id: '', name: '', task: '', status: ''})
  const [error, setError] = useState("")

  // Handles input fields (name, status) and updates the newJob state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
    if (error) setError("");
  }

  // Handles clicking the category buttons (task)
  const handleTaskClick = (e) => {
    e.preventDefault();
    const taskValue = e.target.value;
    setNewJob({ ...newJob, task: taskValue });

    // Clear error message if user selects a task after an error
    if (error) setError("");
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newJob.name.trim()) {
      setError("Job Title cannot be empty.");
      return;
    }
    if (!newJob.task) {
      setError("Please select a job category.");
      return;
    }
    if (!newJob.status || newJob.status === "") {
      setError("Please select a job status.");
      return;
    }

    
     // Create new job with a unique ID
    // Find the maximum existing ID or start from 0 if no jobs exist
    const maxId = jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) : 0;
    const newId = maxId + 1;

    const newJobListing = {
      id: newId,
      name: newJob.name.trim(),
      task: newJob.task.trim(),
      status: newJob.status.trim()
    };
        
    // Update the 'jobs' state by adding the new job listing
    setJobValues([...jobs, newJobListing]);
    
    // Clear the form fields after successful submission
    setNewJob({id: '', name: '', task: '', status: ''});
    setError("");

    // Log the data here, after the state has been updated
    console.log("Submitting Job:", newJobListing); 
    console.log("All Jobs:", [...jobs, newJobListing]); 
  };

  return (
    <div className="form-header">
      <form onSubmit={handleSubmit}>
        {/* An input field for entering job titles */}
        <input 
          type="text" 
          name="name"
          value={newJob.name}
          onChange={handleInputChange}
          className="bot-input" 
          placeholder="Enter the job" />
        
        {/* Buttons for selecting job categories */}
        <div className="form-details">
          <div className="bottom-line">
            <button type="button" onClick={handleTaskClick} value="Read Emails" name="task" className={`tag ${newJob.task === 'Read Emails' ? 'selected-tag' : ''}`}>Read Emails</button>
            <button type="button" onClick={handleTaskClick} value="Web Parsing" name="task" className={`tag ${newJob.task === 'Web Parsing' ? 'selected-tag' : ''}`}>Web Parsing</button>
            <button type="button" onClick={handleTaskClick} value="Send Emails" name="task" className={`tag ${newJob.task === 'Send Emails' ? 'selected-tag' : ''}`}>Send Emails</button>
          </div>
        </div>

        {/* A dropdown menu for selecting job status */}
        <select className="job-status" 
          name="status"
          value={newJob.status} 
          onChange={handleInputChange}> 
          <option value="">Select Status</option> {/* Default, non-submittable option */}
          <option value="start">Start Process</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
          <option value="stopped">Stopped</option>
        </select>

        {/* A submit button to add the job */}
        <button type="submit" className="sumbit-data">Add Jobs</button>
        
        {/* Error Handling */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};
