let newsDetails = [
    {
        "news-company": "CNN",
        "news-heading": "The new brand Spinco is set to change the IT industry",
        "news-desc": "The company has made a bold move by changing course and creating a spinoff from the existing giant that was Atos.",
    },
    {
        "news-company": "CNN",
        "news-heading": "The new brand Spinco is set to change the IT industry",
        "news-desc": "The company has made a bold move by changing course and creating a spinoff from the existing giant that was Atos.",
    },
]


let newsContainer = document.querySelector("#newsDetails");

let newsRow = document.createElement("div");
newsRow.classList.add("row", "row-gap-3");
newsContainer.append(newsRow);

newsDetails.forEach(newsDetailsItem =>  {
    newsRow.innerHTML += `<div class="col-lg-6">
                  <div class="news-details">
                    <p> ${newsDetailsItem["news-company"]} </p>
                    <h3> ${newsDetailsItem["news-heading"]} </h3>
                    <p> ${newsDetailsItem["news-desc"]} </p>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-dark">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>`
})