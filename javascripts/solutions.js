let solutions = [
    { "title": "Advanced Computing", "picture": "./images/advanced-computing.png", "icon": "./images/slanting-arrow.png", "desc": "Cut the carbon and securely capture, compute and analyze data at the edge, in the cloud and in data centers." },
    { "title": "Digital Security", "picture": "./images/digital-security.png", "icon": "./images/slanting-arrow.png", "desc": "Blend logical with physical for safety and confidentiality in your cybersecurity and mission-critical systems." },
    { "title": "Net Zero Transformation", "picture": "./images/net-zero.png", "icon": "./images/slanting-arrow.png", "desc": "Define and deliver on decarbonization and net zero transformation. Tech and data are the only tools for the job." },
    { "title": "One Cloud", "picture": "./images/onecloud.png", "icon": "./images/slanting-arrow.png", "desc": "Achieve cloud's greener and more secure promises with accelerated advisory, adoption and continuous..." },
    { "title": "Smart Platforms", "picture": "./images/smart-platforms.png", "icon": "./images/slanting-arrow.png", "desc": "Innovate like no one's watching. Future-proof your apps. Get agile with DevSecOps. Smarten your business platforms." },
    { "title": "Transformation Acceleration", "picture": "./images/transfomation-acceleration.png", "icon": "./images/slanting-arrow.png", "desc": "Seamlessly integrate data into your business models. From business transformation to AI. IoT to business ops." },
]

let solutionsContainer = document.querySelector("#solutions");

let solutionsRow = document.createElement("div");
solutionsRow.classList.add("row");
solutionsContainer.append(solutionsRow);

// Approach: 1
solutions.forEach(solution => {
    solutionsRow.innerHTML += `<div class="col-lg-4 col-md-6">
                                    <div class="solutions-item">
                                        <div class="image">
                                            <img src="${solution.picture}">
                                        </div>
                                        <div class="solutions-details">
                                            <h3>${solution.title}</h3>
                                            <p>${solution.desc}</p>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-outline-primary">Learn More <img src="${solution.icon}" class="slanting-arrow"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
})

// Approach: 2
// const templateSolutionCard = document.getElementById('template-solution-card');

// const replaceTemplatePlaceholders = (tpl, placeholders) => {
//     Object.keys(placeholders).forEach(placeholder => {
//         tpl = tpl.replaceAll(placeholder, placeholders[placeholder])
//     })

//     return tpl;
// }

// const tplSolutionCard = `<div class="col-lg-4 col-md-6">
//                                     <div class="solutions-item">
//                                         <div class="image">
//                                             <img src="{{ITEM_PICTURE}}">
//                                         </div>
//                                         <div class="solutions-details">
//                                             <h3>{{ITEM_NAME}}</h3>
//                                             <p>{{ITEM_DESC}}</p>
//                                             <div class="btn-group" role="group">
//                                                 <button type="button" class="btn btn-outline-primary">
//                                                     Lerarn More <img src="./images/slanting-arrow.png" class="slanting-arrow" />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>`;

// solutions.forEach(solution => {
//     solutionsRow.innerHTML += replaceTemplatePlaceholders(tplSolutionCard, {
//         "{{ITEM_PICTURE}}": solution.picture,
//         "{{ITEM_NAME}}": solution.title,
//         "{{ITEM_DESC}}": solution.desc,
//     });
// })

// Approach: 3
// solutions.forEach((item) => {
//     let solutionsCol = document.createElement("div");
//     solutionsCol.classList.add("col-lg-4", "col-md-6");
    
//     const card = templateSolutionCard.cloneNode(true)
//     card.content.querySelector('.image img').src = item.picture
//     card.content.querySelector('.solutions-details h3').textContent = item.title
//     card.content.querySelector('.solutions-details p').textContent = item.desc
//     solutionsCol.appendChild(card.content);

//     solutionsRow.appendChild(solutionsCol);
// });
