const FormatCurrentDate = () => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en-US", options);
};
export default FormatCurrentDate;
