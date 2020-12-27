import { getApps} from './dataService.js';

function appTileTemplate({id, title, category, url, group}){
    const colors = {
        "social":"teal",
        "service":"blue",
        "utility":"green",
        "covid":"orange",
        "data":"red",
    };
    return `
    <div class="card-panel ${colors[category]} waves-effect waves-light app-tile">

        <a class="white-text" target="_blank" href="${url}">${title} by ${group}</a>

    </div>
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
    
}

async function run(){

    const apps = await getApps();
    renderApps(apps);
}

export {run};