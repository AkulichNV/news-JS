import AppController from '../controller/controller';
import { GroupArticles, GroupSources } from '../types/main';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document.querySelector('.sources')?.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: GroupArticles) => this.view.drawNews(data)));
        this.controller.getSources((data: GroupSources) => this.view.drawSources(data));
    }
}

export default App;
