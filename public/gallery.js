import { getApps} from './dataService.js';

function appTileTemplate({id, title, category, url, group, level, course}){
    const colors = {
        "social":"teal",
        "service":"blue",
        "utility":"green",
        "covid":"orange",
        "data":"red",
    };
    return `
        <a class="card-panel ${colors[category]} waves-effect waves-light app-tile white-text" title="${title}" rel="noopener" target="_blank" href="${url}">
            <p style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis">${title}</p>
            <p style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis"> by ${group}</p>
            <span style="position: absolute; font-size: 0.9 rem; bottom: 2px; z-index: 12;" data-badge-caption="${level}" class="new badge grey">Year</span>
            <span style="position: absolute; font-size: 0.9 rem; right: 10px; bottom: 2px; z-index: 12;" data-badge-caption="${course}" class="new badge grey"></span>    
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

async function run(){

    const apps = await getApps();
    renderApps(apps);
}

export {run};