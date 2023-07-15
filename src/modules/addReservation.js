let tempID;

const renderReservations = async () => {
  try {
    const baseURL =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
    const appID = "fvEG8bcfusuKIAC9Au4g";
    const itemID = tempID;

    const endpoint = `/apps/${appID}/reservations?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${endpoint}`);
    const reservationInfo = await response.json();

    const reservationsList = document.querySelector(".showComments");
    const reservationCount = document.querySelector(".commentsCounter");
    reservationsList.innerHTML = "<li>Loading reservations...</li>";
    try {
      reservationsList.innerHTML = "";
      if (reservationInfo.length > 0) {
        reservationInfo.forEach((reservation) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${reservation.username} - ${reservation.date_start} to ${reservation.date_end}`;
          reservationsList.appendChild(listItem);
        });
        reservationCount.textContent = `(${reservationInfo.length})`;
      } else {
        reservationsList.innerHTML = "<li>No reservations found</li>";
        reservationCount.textContent = `(0)`;
      }
    } catch (error) {
      reservationsList.innerHTML = "<li>Error loading reservations</li>";
      reservationCount.textContent = "";
      console.error("Error loading reservations:", error.message);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const reserved = async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector(".userName");
  const startDateInput = document.querySelector(".start-date");
  const endDateInput = document.querySelector(".end-date");
  const baseURL =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const appID = "fvEG8bcfusuKIAC9Au4g";

  const endpoint = `/apps/${appID}/reservations/`;
  const rId = e.target.getAttribute("data-id");
  tempID = rId;
  const name = nameInput.value.trim();
  const startDate = startDateInput.value.trim();
  const endDate = endDateInput.value.trim();
  if (name !== "" && startDate !== "" && endDate !== "") {
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: rId,
          username: name,
          date_start: startDate,
          date_end: endDate,
        }),
      });

      if (response.status === 201) {
        nameInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
        renderReservations();
        console.log("Reservation added successfully");
      }

      //await renderReservations();
    } catch (error) {
      console.error("Error adding reservation:", error.message);
    }
  }
  console.log(nameInput);
};

//renderReservations();
