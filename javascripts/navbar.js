// let navbar = {
//     "navbar":[
//         {"navbarLink":"Solutions"} ,
//         {"navbarLink":"Industries"} ,
//         {"navbarLink":"News & Insights"} ,
//         {"navbarLink":"About Us"} ,
//         {"navbarLink":"Careers"} 
//     ]
// }


let navBar = [
    { "navbarLink": "Solutions", "url": "/solutions", "id": "solution", "className": "solution-hover", "title": "Solutions"  },
    { "navbarLink": "Industries", "url": "/industries", "id": "indust", "className": "industries-hover", "title": "Industries" },
    { "navbarLink": "News & Insights", "url": "/news", "id": "news&insights", "className": "news-hover", "title": "News & Insights" },
    { "navbarLink": "About Us", "url": "/about_us", "id": "about_us", "className": "about-us-hover", "title": "About Us" },
    { "navbarLink": "Careers", "url": "/careers", "id": "careers", "className": "careers-hover", "title": "Careers" }
]
 
let solutionsNavbar = [
    {"title": "Solutions"}
]
  

// let navBars = JSON.parse(navBar);

let ulElement = document.querySelector('ul.nav.justify-content-end');

navBar.forEach(item => {
    console.log(item)
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.innerText = item.navbarLink;
    link.href = item.url;
    if (item.id) {
        link.id = item.id
    } 
    li.appendChild(link);
    let innerMenu = document.createElement('div');
    innerMenu.classList.add("solutions-hover")
    innerMenu.innerHTML  = `<div class="container pt-3 pb-3">
          <div class="solutions-card">
            <div class="row">

              <div class="col-lg-3 bg-dark-subtle rounded-4">
                <div class="solutions-card-contents bg-gray d-flex flex-column justify-content-around align-items-start">
                  <h2 class="section-headings"> ${item.title} </h2>
                  <p>Choose a partner with intimate knowledge of your industry and first hand experience of defining its future.</p>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary">
                      Learn More<img src="./images/slanting-arrow.png" class="slanting-arrow">
                    </button>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-3 bg-white">
                <ul class="d-flex flex-column justify-content-around" style="height: 100%;">
                  <li> <a href="*"> Advance Computing </a> </li>
                  <li> <a href="*"> Net Zero Transformation </a> </li>
                  <li> <a href="*"> Digital Security </a> </li>
                  <li> <a href="*"> One Cloud </a> </li>
                  <li> <a href="*"> Smart Platforms </a> </li>
                  <li> <a href="*"> Transformation Acceleration </a> </li>
                </ul>
              </div>
    
              <div class="col-lg-6 bg-dark-subtle rounded-4">
                <div class="solutions-card-contents bg-gray">
                  <div class="row">
      
                    <div class="col-lg-6">
                      <ul class="d-flex flex-column justify-content-around">
                        <li> <a href="*"> High Performance Computing </a> </li>
                        <li> <a href="*"> Data Analytics &amp; Business Computing </a> </li>
                        <li> <a href="*"> AI Software </a> </li>
                        <li> <a href="*"> High Performance Computing </a> </li>
                        <li> <a href="*"> Data Analytics &amp; Business Computing </a> </li>
                      </ul>
                    </div>
      
                    
                  </div>
                </div>
              </div>
            </div>
  
  
          </div>
        </div>`;

      li.append(innerMenu)
    
    let hoverDiv = document.createElement('div');
    if (item.className) {
        hoverDiv.className = item.className
    }

    hoverDiv.innerHTML += `<div class="container pt-3 pb-3">
          <div class="${item.className}-card">
            <div class="row">
            <div class="col-lg-3" style="background: #ECECED; border-radius: 20px;">
                <div class="solutions-card-contents bg-gray d-flex flex-column justify-content-around align-items-start">
                  <h2 class="section-headings"> ${item.navbarLink} </h2>
                  <p>Choose a partner with intimate knowledge of your industry and first hand experience of defining its future.</p>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary">
                      Learn More<img src="./images/slanting-arrow.png" class="slanting-arrow" />
                    </button>
                  </div>
                </div>
              </div>`
    
    // li.appendChild(hoverDiv);
    
    ulElement.appendChild(li);
});



let solutionsLink = document.querySelector('#solution');
let solutionsHover = document.querySelector('.solutions-hover');

if (solutionsLink && solutionsHover) {
    // solutionsLink.addEventListener('mouseenter', () => {
    //   solutionsHover.style.display = 'block'; 
    // });

    // solutionsLink.addEventListener('mouseleave', () => {
    //   solutionsHover.style.display = 'none'; 
    // });

    // solutionsHover.addEventListener('mouseenter', () => {
    //   solutionsHover.style.display = 'block';
    // });

    // solutionsHover.addEventListener('mouseleave', () => {
    //   solutionsHover.style.display = 'none'; 
    // });
}
