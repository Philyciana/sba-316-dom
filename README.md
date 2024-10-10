# sba-316-dom
In application.js there is several instances where elements are cached using selectElementId. All the different forms were cached by ID from the application.html document. These forms are registration, basic-info, and job-info.

All labels were cached using querySelectorAll to get a list of all labels to be iterated over and applied font size style to using a for loop.

Elements such as the "Date of birth:" label and file inputs were created in the DOM and appended at a specific location between elements using a parent-child-sibling relationship.
.insertBefore utalized this relationship. document.createElement was used used to create file inputs.

appendChild was utalized inside of the thankApplicant function while creating a document fragment. While creating a new element I also added the element to the document fragment on the same line using appendChild. The element was then added to the document body using appendChild.

When the user interacts with the file input by selecting a file, a event listener associated with a handler function is triggered. The color of the label is changed using .style and the textContent changes.

The second event listener with a associated event handler is where the application submit button is clicked and the thankApplicant function is triggered. A thank you message is thrown at the bottom of the site.

Input attributes were included in the HTML. These attributes include the minlength attribute on the password input and the required attribute on both the email and password inputs.