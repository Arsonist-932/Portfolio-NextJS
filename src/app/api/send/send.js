export const sendData = async (data) => {
  const JSONdata = JSON.stringify(data);

  await fetch("api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  }).then((res) => {
    if (res.status === 200) {
      console.log("Message sent.");
    }
  });
};
