let clientsReview = [
    {
        "client-company": "Tata Motors",
        "client-designation": "Managing Director",
        "client-desc":
            "SpinCo offered industry leading solutions to our company. The AI Tech they have intergrated for us has helped enhance our CRM",
        "client-hover-title": "Cloud Database",
        "client-hover-desc": "We created a cloud database for Bajaj that helped them maintain a centralised database across the company.",
    },
    {
        "client-company": "Tata Motors",
        "client-designation": "Managing Director",
        "client-desc":
            "SpinCo offered industry leading solutions to our company. The AI Tech they have intergrated for us has helped enhance our CRM",
        "client-hover-title": "Cloud Database",
        "client-hover-desc": "We created a cloud database for Bajaj that helped them maintain a centralised database across the company.",
    },
    {
        "client-company": "Tata Motors",
        "client-designation": "Managing Director",
        "client-desc":
            'SpinCo offered industry leading solutions to our company. The AI Tech they have intergrated for us has helped enhance our CRM" ',
        "client-hover-title": "Cloud Database",
        "client-hover-desc": "We created a cloud database for Bajaj that helped them maintain a centralised database across the company.",
    },
];

let clientsContainer = document.querySelector("#clients-review");

let clientsRow = document.createElement("div");
clientsRow.classList.add("row", "row-gap-3");
clientsContainer.append(clientsRow);

clientsReview.forEach((clientsItem) => {
    clientsRow.innerHTML += `<div class="col-lg-4">
    <div class="clients-content">
      <div class="clients-review-front">
        <div class="client-details">
          <h3> ${clientsItem["client-company"]} </h3>
          <p> ${clientsItem["client-designation"]} </p>
        </div>
        <p>
          <span class="quote-orange"> " </span> ${clientsItem["client-desc"]}
        </p>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-dark">
            Read Case Study
          </button>
        </div>
      </div>

      <div class="clients-review-hover">
        <h3> ${clientsItem["client-hover-title"]} </h3>
        <p> ${clientsItem["client-hover-desc"]} </p>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-dark">
            Read Case Study
          </button>
        </div>
      </div>
    </div> `;
});
