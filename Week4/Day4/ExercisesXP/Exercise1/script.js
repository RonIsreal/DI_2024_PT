/* Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/

const cont = document.getElementById("container");
console.log(cont);

document.addEventListener('DOMContentLoaded', () => {
    const pete = Array.from(document.querySelectorAll('ul.list li'))
                      .find(li => li.textContent.trim() === 'Pete');
    
    if (pete) {
        pete.textContent = 'Richard';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sarah = Array.from(document.querySelectorAll('ul.list li'))
                      .find(li => li.textContent.trim() === 'Sarah');
    
    if (sarah) {
        sarah.remove();
    }
});

const lists = document.querySelectorAll('ul.list');
lists.forEach(list => {
    const firstItem = list.querySelector('li');
    if (firstItem) {
        firstItem.textContent = 'Ronny';
    }
});

lists.forEach(list => {
    list.classList.add('student_list');
});

if (lists.length > 0) {
    lists[0].classList.add('university', 'attendance');
}