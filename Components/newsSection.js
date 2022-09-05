


export default function newsSection(story){

    return`
        <div class="article">
            <div class="article_left flex">
                <a class="article_title" href="${story.url}">${story.title}</a>

                
                <div class="article_detail flex">
                    <p>Story by ${story.user}</p>
                    
                    <div class="flex">
                        <p class="flex center"> 
                            <span class="flex center">
                                <i class="ri-time-line"></i>
                            </span>
                            ${story.time_ago} 
                        </p>|
                        <a class="flex center comment_link" href="/article?id=${story.id}"> 
                            <span class="flex center">
                                <i class="ri-chat-1-line"></i>
                            </span>
                            ${story.comments_count} 
                        </a>
                    </div>
                </div>
            </div>

            <div class="article_rigth flex center">
                <div class="article_point_box flex center">
                    <div class="article_point flex center">
                        ${story.points || 'N/A'}
                    </div>
                </div>
                <a class="btn article_btn" href="${story.url}">
                    Read more
                </a>
            </div>

            <div class="acticle_favorite flex center">
                <i class="ri-heart-line"></i>
            </div>
        </div>
    `
};