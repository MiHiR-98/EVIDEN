let evidenDetails = [
    {
        "evidenDetailsClassName": "people-details",
        "evidenDetailsValues": "57,000",
        "evidenDetailsDesc": "People",
     },
     {
        "evidenDetailsClassName": "patent-details",
        "evidenDetailsValues": "2,100",
        "evidenDetailsDesc": "Patents",
     },
     {
        "evidenDetailsClassName": "digital-certifications-details",
        "evidenDetailsValues": "50,000",
        "evidenDetailsDesc": "Digital Certifications",
     },
     {
        "evidenDetailsClassName": "revenue-details",
        "evidenDetailsValues": "&euro;5 billion",
        "evidenDetailsDesc": "Revenue in 2022",
     },
]

let evidenDetailsContainer = document.querySelector("#eviden-details");

evidenDetails.forEach(evidenDetailsItem => {
    evidenDetailsContainer.innerHTML += `<div class=" ${evidenDetailsItem.evidenDetailsClassName} ">
                                            <h3> ${evidenDetailsItem.evidenDetailsValues} </h3>
                                            <p> ${evidenDetailsItem.evidenDetailsDesc} </p>
                                        </div>`
})

