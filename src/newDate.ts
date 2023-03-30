const currentDate = (): String => {
  let today: string | Date = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

export default currentDate;
