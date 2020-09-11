const get_class = (name) => document.getElementsByClassName(name),
get_tag = (name) => document.getElementsByTagName(name),
get_id = (name) => document.getElementById(name),
random = (num) => Math.round(Math.random() * num);

let button = get_class('button'),
body = get_tag('body'),
cite = get_class('cite'),
quote = get_class('quote'),
author = get_class('author');


const colors_change = () => {
    const random_colors = colors[random(4)];
    button[0].style.background = random_colors;
    body[0].style.background = random_colors;
    quote[0].style.color = random_colors;
    author[0].style.color = random_colors;
}
const quote_change = () => {
    cite[0].innerHTML = quotes[random(6)];
}


const engine = () => {
    quote_change();
    colors_change();
}

button[0].addEventListener("click", engine);


///////////////////////////////////////////////////////////////////////////////////////////
//ARRAYS//
///////////////////////////////////////////////////////////////////////////////////////////

const colors = ['Aqua', 'Lime', 'OrangeRed', 'Magenta', 'Red'];

const quotes = [
'<cite class="quote">Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.</cite><p class="author">― Albert Einstein</p>',
'<cite class="quote">If you tell the truth, you don\'t have to remember anything.</cite><p class="author">― Mark Twain</p>',
'<cite class="quote">A friend is someone who knows all about you and still loves you.</cite><p class="author">― Elbert Hubbard</p>',
'<cite class="quote">To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</cite><p class="author">― Ralph Waldo Emerson</p>',
'<cite class="quote">We accept the love we think we deserve.</cite><p class="author">― Stephen Chbosky</p>',
'<cite class="quote">It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.</cite><p class="author">― Mark Twain</p>',
'<cite class="quote">To succeed in life, you need two things ignorance and confidence.</cite><p class="author">― Mark Twain</p>'
];
