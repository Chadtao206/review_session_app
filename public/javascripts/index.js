$(document).ready(() => {
  let traveller_id;
  $(".travel-btn").on("click", function () {
    traveller_id = $(this).attr("data-id");
    $.get("/api/locations").then((data) => {
      $(".modal-body").html(`
                ${data
                  .map(
                    (location) => `
                    <button type="button" data-id="${location.id}" class="btn location-btn btn-secondary">${location.location_name}</button>
                `
                  )
                  .join("")}
          `);

      $(".location-btn").on("click", function () {
        const location_id = $(this).attr("data-id");
        const trip_budget = $("#budget-input").val().trim();
        if (isNaN(trip_budget)) {
          $(".valid-feedback").text("That's no number you dummy!");
        } else {
          console.log("traveler ID ", traveller_id);
          console.log("Location ID --- ", location_id);
          console.log("budget --- ", trip_budget);

          //query backend now data is good
          $.post("/api/trips", { location_id, trip_budget, traveller_id }).then(
            (data) => console.log(data)
          );
        }
      });
    });
  });
});
