import newsSection from "../Components/newsSection";
import showCase from "../Components/showCase";
import view from "../Utils/view";

let stories = null;
const index = 0;


export default async function Stories(path){
    stories = await getStories(path);
    const hasStories = stories.length > 0;
    let filterStories = stories;

    render(hasStories, filterStories);
};

function render(hasStories, filterStories){
    view.innerHTML = `<section>
        <div class="showcase">
            ${hasStories ? showCase(filterStories[index], index) : 'No stories'}
        </div>

        <div class="main_container">
            <div class="main_filter">
                <button class="btn filter_btn">All</button>
                <button class="btn filter_btn">Ask</button>
                <button class="btn filter_btn">Links</button>
            </div>
            ${hasStories ? filterStories.map(story => newsSection(story)).join('') : 'No stories'}
        </div>
   </section>`

   handleFilter(hasStories,filterStories)
}

function handleFilter(hasStories, filterStories){
    const filterBtn = document.querySelectorAll('.filter_btn');
    filterBtn.forEach(btn => btn.addEventListener('click', (e) => {
        const filter = e.target.innerHTML;
        
        if(filter === 'All'){
            render(hasStories, stories)
        }else if(filter === 'Ask'){
            const askFilter = filterStories.filter(story => story.type === 'ask')
            askFilter.length ===0 ? render(hasStories, stories): 
            render(hasStories, askFilter);
        }else if(filter === 'Links'){
            const linkFilter = filterStories.filter(story => story.type === 'link')
            linkFilter.length === 0 ? render(hasStories, stories): 
            render(hasStories, linkFilter);
        }
    }));
}

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
}
