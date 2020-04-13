const changeTheme = () => {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.classList.toggle('dark');
    htmlElement.classList.toggle('light');
};

const buttons = document.getElementsByClassName('toggle-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeTheme);
}
