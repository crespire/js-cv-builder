## High level summary
App is just a container. I think each sub-section of the application should hold all the state for that section of the CV.

The Biographical section should hold all the state and pass it down to the display and entry components.

InfoContainer
State
* name
* address
* email
* phone number
* website

```js
handleInputChange(event) { // from the React guides, actually possible to handle add fields with one callback if they are named!
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  })
}
```

Can use the enumerated list as the controller component, then have different display components for Education and Work. So place would be school/company, entry could be the degree/job title.

For the InfoContainer, I would like to try to implement a system where you click an element to edit, and then hit enter to exit edit mode. This way there's not explicit "Edit" button.

I guess I would have a field with a placeholder with no borders? It should have an onChange to capture the value in state. But aside from that, it seems like I can just do a field without borders.

I think we can use the same trick for the ListItem component, where we just capture changes in the state with an "input change" method. I think the trouble here is we're modifying a nested state variable so we'd have to search by ID, or at least have the ID passed in.

EnumeratedList:

EnumeratedList
State
* Array: [{place, dates, entry, description}]
* list_item: {
  place: '',
  dates: '',
  entry_title: '',
  entry_description: '',
  id: uniq()
}
* editMode
* editID

```js
handleListChange(event, id) {

}
```

So, I think we just want to display the new item, as a form, and each item will utilize the same list item thing.

I think what we'll do is have a "save" button, which will "submit" the form to state, reset the newItem fields.

Then we can have the component loop over listItems and pass props to display, with an option to edit and delete, like the task list application. I think this is probably the easiest way to do it.

Because we display the list, even when it's empty, it will start with an empty form state. We can just add styles to the enumerated list object in terms of how it should list items and we'll be good to go.

So then we'll need two additional components:
ListItem
EditListItem

both will work with state from the list.
