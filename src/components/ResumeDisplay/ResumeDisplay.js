function ResumeDisplay({ formData }) {
  return (
    <div>
      <h2>
        {formData?.firstName} {formData?.lastName}
      </h2>
      <h4>{formData?.role}</h4>
    </div>
  );
}

export default ResumeDisplay;
