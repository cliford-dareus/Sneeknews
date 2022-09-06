
const images = [
    {image: 'Im7lZjxeLhg'},
    {image: 'oyXis2kALVg'},
    {image: 'EUsVwEOsblE'},
    {image: 'FO7JIlwjOtU'},
    {image: 'oyXis2kALVg'},
];

export default function showCase(story, iii, page){


    return `
        <p class="showcase_title bold">${page}</p>
        <div class="showcase_image">
            <img src="https://source.unsplash.com/${images[iii].image}" alt="">
        </div>
        <h1>${story.title}</h1>
        <div class="flex center showcase_detail">
            <div class="flex">
                <p>By ${story.user}</p>|
                <p>${story.time_ago}</p>
            </div>

            <a class="flex center comment_link" href="#/article?id=${story.id}"> 
                <span class="flex center">
                    <i class="ri-chat-1-line"></i>
                </span>
                ${story.comments_count} 
            </a>
        </div>
    `
};