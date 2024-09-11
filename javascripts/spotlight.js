let spotLight = [
    { "title": "Blogs", "logo": "./images/Blog-white 1.png", "desc": "Our AI experts build an autonomous AI tool ", "style": "" },
    { "title": "Client Stories", "logo": "./images/client-story.png", "desc": "Our AI experts build an autonomous AI tool ", "style": "" },
    { "title": "Publications", "logo": "./images/publications.png", "desc": "Our AI experts build an autonomous AI tool ", "style": "" },
    { "title": "Events", "logo": "./images/event.png", "desc": "Our AI experts build an autonomous AI tool ", "style": "transform: translate3d(10px, 10px, 10px);" },
]

let spotlightContainer = document.querySelector('#spotlight');

spotLight.forEach(item => {
    console.log(item)
    let spotlightColumn = document.createElement('div');
    spotlightColumn.classList.add("col-lg-3", "col-md-6");
    spotlightColumn.innerHTML = `<div class="spotlight-item">
                                    <div class="spotlight-circle">
                                        <div class="spotlight-circle-inner">
                                            <div class="img">
                                                <img src="${item.logo}" style="${item.style}">
                                            </div>
                                            <h3>${item.title}</h3>
                                        </div>
                                    </div>
                                    <div class="spotlight-details"><p>${item.desc}</p></div>
                                </div>` ;
    spotlightContainer.append(spotlightColumn);
})