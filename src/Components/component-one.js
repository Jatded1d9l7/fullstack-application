function Counter() {
    let count = 0;

    function updateCount() {
        countElement.textContent = count;
    }

    const countElement = document.createElement('p');
    const incrementButton = document.createElement('button');

    incrementButton.textContent = 'Increment';
    incrementButton.addEventListener('click', () => {
        count++; 
        updateCount(); 
    });

    updateCount();

    const component = document.createElement('div');
    component.classList.add('counter');
    component.appendChild(countElement);
    component.appendChild(incrementButton);

    document.body.appendChild(component);
}

const counter = new Counter();

export default Counter;