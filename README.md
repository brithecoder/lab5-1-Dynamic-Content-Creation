## Reflection Questions

### How did you dynamically create and append new elements to the DOM?
When someone added an item from the form I created an element in an array and pushed the element into the array then to display the elements of the array I created an unorderd list then created a  list item container for each element in the array.

### What steps did you take to ensure accurate updates to the total price?
 I made sure the the price of each element was reachable through console.log then when I had the price for an item I updated the totalsum with that element's price. 

### How did you handle invalid input for product name or price?
To handle form validation I added the required key to the HTML input and I also handled this in the addItem function by giving an alert if the price was not there or set to 0. 
### What challenges did you face when implementing the remove functionality?
Challenges I faced were making sure that the price of the item was subtracted from the total sum.