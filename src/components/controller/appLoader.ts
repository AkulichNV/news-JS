import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0defa6144a8e4c0889c99701e4bbd364', 
        });
    }
}

export default AppLoader;
