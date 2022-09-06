import view from "../Utils/view";
import showCase from "../Components/showCase";
import Comments from "../Components/CommentsSection";


export default async function Article(){
    const article = await getStories();
    let hasComment = article.comments.length > 0;

    console.log(article.comments)

    view.innerHTML = `
        <section class="comment_section">
            <div>
                ${showCase(article, 3, 'Article')}
            </div>

            <div class="comment_container">
                <p class="comment_title bold" data-id=${article.comments.length}>Comments</p>
                ${hasComment? article.comments.map(comment => Comments(comment)).join('') : 'No comments'}
            </div> 
        </section>
    `
};


async function getStories(){
    const articleId = window.location.hash.split('?id=')[1];

    console.log(articleId)

    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${articleId}`);
    const article = await response.json();
    return article;
}
