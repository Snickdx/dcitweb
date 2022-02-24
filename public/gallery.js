import { getApps} from './dataService.js';

function appTileTemplate({id, title, category, url, group, level, course, year}){
    const colors = {
        "social":"teal",
        "service":"blue",
        "utility":"green",
        "covid":"orange",
        "data":"red",
    };
    return `
        <a onclick="onModalOpen(event)" data-title="${title}" data-category="${category}" data-url="${url}" data-level="${level}" data-group="${group}" data-year"${year}" data-course="${course}" class="card-panel ${colors[category]} waves-effect waves-light app-tile white-text" title="${title}" href="/gallery">
            <p style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis">${title}</p>
            <p style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis"> by ${group}</p>
            <span style="position: absolute; font-size: 0.9 rem; left: 0px; bottom: 2px; z-index: 12;" data-badge-caption="${level}" class="new badge grey">Year</span>
            <span style="position: absolute; font-size: 0.9 rem; right: 0px; bottom: 2px; z-index: 12;" data-badge-caption="${course} ${year}" class="new badge grey"></span>    
        </a>
        
    `;
}

function renderApps(apps){
   
    const categories = ["social", "service", "utility", "covid", "data"];
    
    categories.map(category=>{
        document.querySelector(`#${category}`)
            .innerHTML = apps
                .filter(app=>app.category === category)
                .map(appTileTemplate)
                .join('');
    });

    document.querySelector('#featured')
        .innerHTML = apps
                        .filter(app=>app.featured === true)
                        .map(appTileTemplate)
                        .join('')
}
const dialog = document.querySelector('#myDialog');

function onModalOpen(event){
    event.preventDefault();
    const button = event.target;//get the button from the event
    const {url, category, year, course, group} = button.dataset;
    document.querySelector('#dialogContent').innerHTML = `
        <div>
            Hello
        </div>
    `;
    dialog.showModal();
  }
  
const closeModal = document.querySelector('#closeModal');

closeModal.addEventListener('click', function(){ 
    dialog.close(); 
    document.body.focus();
});
  

async function run(){

    const apps = await getApps();
    renderApps(apps);
}

export {run};