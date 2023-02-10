export const createHeader = () => {
    const header = document.createElement('header');

    header.style.backgroundColor = 'yellow';
    header.style.width = '100%';

    const hello = document.createElement('h1');
    hello.textContent = 'hello';
    hello.style.color = 'brown';
    hello.style.margin = 0;
    hello.style.padding = '24px';

    header.append(hello);

    return header;
}