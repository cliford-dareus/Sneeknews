


const images = [
    {image: 'Im7lZjxeLhg'},
    {image: 'oyXis2kALVg'},
    {image: 'EUsVwEOsblE'},
    {image: 'FO7JIlwjOtU'},
    {image: 'oyXis2kALVg'},
];

export default function showCase(story, index){
    console.log(story)

    return `
        <div class="showcase_image">
            <img src="https://source.unsplash.com/${images[index].image}" alt="">
        </div>
        <h1>${story.title}</h1>
    `
};