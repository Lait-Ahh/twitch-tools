
function getWidgetStyle() {
    const json = {
        container_border_color: document.getElementById('container-border-color').value,
        container_border_width: document.getElementById('container-border-width').value,
        container_border_type: document.getElementById('container-border-type').value,
        container_background_color: document.getElementById('container-background-color').value,
        container_padding: document.getElementById('container-padding').value,
        container_width: document.getElementById('container-width').value,
        chat_border_color: document.getElementById('chat-border-color').value,
        chat_border_width: document.getElementById('chat-border-width').value,
        chat_border_type: document.getElementById('chat-border-type').value,
        chat_background_viewer: document.getElementById('chat-background-viewer').value,
        chat_background_follower: document.getElementById('chat-background-follower').value,
        chat_background_sub: document.getElementById('chat-background-sub').value,
        chat_padding: document.getElementById('chat-padding').value,
        chat_username: document.getElementById('chat-username').value,
        chat_spacing: document.getElementById('chat-spacing').value,
        chat_message: document.getElementById('chat-message').value,
        chat_height: document.getElementById('chat-height').value,
        avatar: document.getElementById('chat-avatar').value,
        badges: document.getElementById('chat-badges').value
    }
    return JSON.stringify(json).replaceAll('"', "'");
}

function updateWidgetStyle() {
    const style = getWidgetStyle();
    const channel = document.getElementById('chat-settings-channel').value;
    document.querySelector('iframe').style.width = `${parseInt(document.getElementById('container-width').value.replace('px', ''))+2*parseInt(document.getElementById('container-padding').value.replace('px', ''))+2*parseInt(document.getElementById('container-border-width').value.replace('px', ''))}px`;
    document.querySelector('iframe').src = `/widget/chat-box.html?channel=${channel}&style=${style}`;
    document.querySelector('iframe').contentWindow.location.reload();
}

document.querySelectorAll('input').forEach(e => e.addEventListener('input', updateWidgetStyle));
document.querySelectorAll('select').forEach(e => e.addEventListener('input', updateWidgetStyle));

updateWidgetStyle();

document.querySelector('.Link').addEventListener('click', () => {
    const style = getWidgetStyle();
    const channel = document.getElementById('chat-settings-channel').value;
    const url = `http://127.0.0.1:32778/widget/chat-box.html?channel=${channel}&style=${style}`;
    const code = document.getElementById('url');
    code.innerHTML = url;
    navigator.clipboard.writeText(url);
    document.querySelector('.Modal__Background').style.display = 'block';
});

document.getElementById('url').addEventListener('click', (e) => {
    const style = getWidgetStyle();
    const channel = document.getElementById('chat-settings-channel').value;
    const url = `http://127.0.0.1:32778/widget/chat-box.html?channel=${channel}&style=${style}`;
    navigator.clipboard.writeText(url);
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.querySelector('.Modal__Background').style.display = 'none';   
});