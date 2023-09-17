const searchParams = new URLSearchParams(document.location.href.split('?')[1]);

document.querySelector('title').innerHTML += searchParams.get('channel');

console.log(searchParams.get('style'))

const style = JSON.parse(searchParams.get('style').replaceAll("'", '"'));

let stylesheet = `
.Container {
    border-color: ${style.container_border_color};
    border-width: ${style.container_border_width};
    border-style: ${style.container_border_type};
    background-color: ${style.container_background_color};
    padding: ${style.container_padding};
    width: ${style.container_width};
}

.Chat {
    border-color: ${style.chat_border_color};
    border-width: ${style.chat_border_width};
    border-style: ${style.chat_border_type};
    padding: ${style.chat_padding};
}

.User {
    margin-bottom: ${style.chat_spacing};
}

.User .Name {
    font-size: ${style.chat_username};
}

.Text {
    font-size: ${style.chat_message};
    line-height: ${style.chat_height};
}

`;

if(style.avatar !== 'hidden') {
    const size = (style.avatar === 'small' ? '20px' : '40px');
    stylesheet += `.Avatar{width:${size};height:${size};}`;
} else {
    stylesheet += `.Avatar{display:none;}`;
}

if(style.badges !== 'hidden') {
    if(style.badges === 'after') {
        stylesheet += `.Badges{margin-left:5px;}`;
    } else {
        stylesheet += `.Box{flex-direction:row-reverse;}`
        stylesheet += `.Badges{margin-right:5px;}`;
    }
} else {
    stylesheet += `.Badges{display:none;}`;
}

document.getElementById('custom-style').innerHTML = stylesheet;