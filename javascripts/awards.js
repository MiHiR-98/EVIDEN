let awardsDetails = [
    {
        "awardYear": "2019",
        "awardDesc": "Global Business",
        "awardTitle": "Teach Awards",
    },
    {
        "awardYear": "2020",
        "awardDesc": "Global Business",
        "awardTitle": "Teach Awards",
    },
    {
        "awardYear": "2021",
        "awardDesc": "Global Business",
        "awardTitle": "Teach Awards",
    },
    {
        "awardYear": "2022",
        "awardDesc": "Global Business",
        "awardTitle": "Teach Awards",
    },
]


let awardContainer = document.querySelector("#awardDetails");

let awardRow = document.createElement("div");
awardRow.classList.add("row");
awardContainer.append(awardRow);

awardsDetails.forEach(awardsDetailsItem => {
    awardRow.innerHTML += `<div class="col-lg-3 col-md-6">
                  <div class="awards-details">
                    <img src="./images/award-medal.png" />
                    <p> ${awardsDetailsItem.awardYear} </p>
                    <h3> ${awardsDetailsItem.awardDesc} </h3>
                    <p> ${awardsDetailsItem.awardTitle} </p>
                  </div>
                </div>`
})
