import { getApps} from './dataService.js';

async function search(token){
    return (await getApps()).filter(app=>{
        token = token.toLocaleLowerCase();
        const title = app.title.toLocaleLowerCase();
        const description = app.description.toLocaleLowerCase();
        const tags = app.tags.join('').toLocaleLowerCase();
        const body = title+description+tags;
        return body.includes(token);
    });
}

function appItemTemplate({title, category, image, tags, description, url, repo }){
    // <img src="${image}" alt="" class="circle"></img>
    const colors = {
        "social":["teal", "group"],
        "service":["blue", "room_service"],
        "utility":["green", "build"],
        "covid":["orange", "coronavirus"],
        "data":["red", "analytics"],
    };
    return `
        <li class="collection-item avatar" style="padding-right:35px">
            <i class="material-icons circle ${colors[category][0]}">${colors[category][1]}</i>
            <span class="title">${title || 'Title missing'}</span>
            <p style="text-overflow: ellipsis">${description || 'Description missing'}</p>
            <a href="${url}" rel="noopener" target="_blank" class="secondary-content"><i class="material-icons">launch</i></a>
            <a href="${repo}" rel="noopener" style="position:absolute; top: 50px; right:16px;" target="_blank"><i class="material-icons">code</i></a>
        </li>
  `;
}

async function run(){
    const searchText = document.querySelector('#search');
    const result = document.querySelector('#result');

    result.innerHTML = (await getApps()).map(appItemTemplate).join('');

    searchText.addEventListener('input', async event=>{
       const filtered = await search(event.target.value);
       result.innerHTML = filtered.map(appItemTemplate).join('');
    });
}

export { run, search }