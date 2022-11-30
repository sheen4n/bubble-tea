function addItem() {
	/* 1. Get the item value */
	const itemValue = document.getElementById("input_todo").value;

	/* 2. Create a new li element with item value */
	// Write your code here
	const li = document.createElement("li");
	li.textContent = itemValue;

	/* 3. Add new item to list */
	// Write your code here
	const todoList = document.getElementById("list_todo");
	todoList.append(li);
}
