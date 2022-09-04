import Navigo from 'navigo';
import Stories from '../Pages/Stories'


const router = new Navigo(null, true, '#');
console.log(router);

export default class RouterHandler{
    constructor(){
        this.createRoute()
    }

    createRoute(){
        const routes = [
            { path: '/', page: Stories},
            { path: '/story', page: Stories},
            { path: '/forum', page: Stories},
        ];

        routes.forEach(({ path, page}) => {
            router.on(path, () => {
                page(path)
            }).resolve();
        })
    };
};