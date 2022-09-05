

export default function Comments(articles){
    const hasNestedComments = articles.comments.length > 0;
   
    return`
        <div class="comment-${articles.level} comment">
            <div class="comment_top flex center">
                <p class="bold">${articles.user}</p>
                <span class="flex center">.<span>
                <p>${articles.time_ago}</p>
            </div>

            <div class="">
                <p>${articles.content}</p>
                <p>${hasNestedComments ? articles.comments.map(comment => Comments(comment)).join("") : ""}</p>
            </div>
        </div>
    `
}