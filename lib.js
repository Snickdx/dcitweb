function executeScripts(){
  let script = document.querySelector('script').innerText;
  try{
    eval(script);
  }catch(e){
    console.error(e);
  }   
}

async function fetchRender(url, selector){
  try{
    let content = document.querySelector(selector);
    let response = await fetch(url);
    content.innerHTML = await response.text();
    executeScripts();
  }catch(e){
    content.innerHTML = e;
  }
}

function getTitle(url){
  const title = `${url}`.replace('/', '');
  const [first, ...rest] = title;
  return first.toUpperCase()+rest.join('');
}

//event handler
function navigate(state, url, outletSelector){
  const title = getTitle(url);
  history.pushState( {...state, title, url}, title, url);
  console.log(history);
  document.title = title;
  fetchRender(`${url}.html`, outletSelector);
}

function handleBack(event, homeURL, outletSelector){
  //if no links were clicked pushState() is never called
  //as pushState() is never called there will be no data in event.state
  if(event.state === null){
    navigate({}, homeURL, outletSelector);
  }else{
    //links were clicked before so we can get the text and url passed from handleClick()
    navigate({}, event.state.url, outletSelector);  
  }
}


export { navigate, handleBack }