export default class Router {

  constructor(routes, selector){

    this.routes = this.loadRoutes(routes);
    this.baseRoute = routes
                      .filter(route=>"base" in route)[0];
    
    if(this.baseRoute === undefined)
      throw 'No base route error';

    this.routerOutlet = document.querySelector(selector);

    window.addEventListener('popstate',  e => this.handleBack(e) );
  }

  loadRoutes(routes){
    return routes.reduce(
            (acc, cur)=>{
              cur.module = import(cur.modulePath); 
              acc[cur.url] = cur;
              return acc;
            }, {});
  }

  entryNavigate(){
    if(window.location.pathname in this.routes)
      this.navigate(window.location.pathname);
    else
      this.navigate(this.baseRoute.url);
  }

  async executeRouteModule(url){
    if(!(url in this.routes))
      throw `Unknown route: ${url}`;
    const module = await this.routes[url].module;
    module.run();
  }

  async fetchRender(url){
    try{
      let response = await fetch(url);
      this.routerOutlet.innerHTML = await response.text();
    }catch(e){
      console.error(e);
    }
  }

  getTitle(url){
    const title = `${url}`.replace('/', '');
    const [first, ...rest] = title;
    return first.toUpperCase()+rest.join('');
  }

  async navigate(url){
    const title = this.getTitle(url);
    history.pushState( {title, url}, title, url);
    document.title = title;
    await this.fetchRender(`${url}.html`);
    this.executeRouteModule(url);
  }

  handleBack(event){
    console.log(window.history);
    if(event.state === null){
      this.navigate(this.homeURL);
    }else{
      console.log('going back to'+ event.state.url);
      this.navigate(event.state.url);  
    }
  }

}