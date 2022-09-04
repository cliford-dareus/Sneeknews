import newsSection from "../Components/newsSection";
import showCase from "../Components/showCase";
import view from "../Utils/view"

const index = 1

export default async function Stories(path){
    const stories = await getStories(path);
    const hasStories = stories.length > 0;
    console.log(stories)

   view.innerHTML = `<section>
        <div>
            ${hasStories ? showCase(stories[index], index) : 'No stories'}
        </div>

        <div>
            ${hasStories ? stories.map(story => newsSection(story)).join('') : 'No stories'}
        </div>
   </section>`
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
}