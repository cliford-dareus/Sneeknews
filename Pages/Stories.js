import newsSection from "../Components/newsSection";
import showCase from "../Components/showCase";
import view from "../Utils/view";
import { index } from '../Utils/view'

let stories = null;
let page;


export default async function Stories(path){
    stories = await getStories(path);
    const hasStories = stories.length > 0;
    let filterStories = stories;
    
    switch (path) {
        case '/':
            page = 'Popular'
            break
        case '/story':
            page = 'Newest'
            break
        default:
            page = 'Top'
            break;
    }

    render(hasStories, filterStories, page);
};

function render(hasStories, filterStories){
    view.innerHTML = `<section>
        <div class="showcase">
            ${hasStories ? showCase(stories[index] , index, page) : 'No stories'}
        </div>

        <div class="main_container">
            <div class="main_filter">
                <button class="btn filter_btn">All</button>
                <button class="btn filter_btn">Ask</button>
                <button class="btn filter_btn">Links</button>
            </div>
            <div class="main_content_container flex">
                ${hasStories ? filterStories.map(story => newsSection(story)).join('') : 'No stories'}
            </div>
        </div>
   </section>`

   handleFilter(hasStories,filterStories, page);
};

function handleFilter(hasStories, filterStories){
    const filterBtn = document.querySelectorAll('.filter_btn');
    filterBtn.forEach(btn => btn.addEventListener('click', (e) => {
        const filter = e.target.innerHTML;
        
        if(filter === 'All'){
            render(hasStories, stories, page)
        }else if(filter === 'Ask'){
            const askFilter = filterStories.filter(story => story.type === 'ask')
            askFilter.length ===0 ? render(hasStories, stories): 
            render(hasStories, askFilter, page);
        }else if(filter === 'Links'){
            const linkFilter = filterStories.filter(story => story.type === 'link')
            linkFilter.length === 0 ? render(hasStories, stories): 
            render(hasStories, linkFilter, page);
        }
    }));
};

async function getStories(path){
    const isHomePage = path === '/';
    const isStoryPage = path === '/story';

    if(isHomePage){
        path = '/news';
    }else if(isStoryPage){
        path = '/newest'
    }

    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
};
