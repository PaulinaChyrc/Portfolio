let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newToDo;

let popup;
let popupInfo;
let toDoEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toDoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewToDo);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeToDoText);
	toDoInput.addEventListener('keyup', enterKeyCheck);
};

const addNewToDo = () => {
	if (toDoInput.value !== '') {
		newToDo = document.createElement('li');
		newToDo.textContent = toDoInput.value;
		createToolsArea();

		ulList.append(newToDo);

		toDoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Add a new task info!';
	}
};

const createToolsArea = () => {
	const toolsPannel = document.createElement('div');
	toolsPannel.classList.add('tools');
	newToDo.append(toolsPannel);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPannel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editToDo(e);
	} else if (e.target.matches('.delete')) {
		deleteToDo(e);
	}
};

const editToDo = (e) => {
	toDoEdit = e.target.closest('li');
	popupInput.value = toDoEdit.firstChild.textContent;
	console.log(toDoEdit.firstChild);
	popup.style.display = 'flex';
};

const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.textContent = '';
};

const changeToDoText = () => {
	if (popupInput.value !== '') {
		toDoEdit.firstChild.textContent = popupInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
	} else {
		popupInfo.textContent = 'You need to add task info';
	}
};

const deleteToDo = (e) => {
	e.target.closest('li').remove();
	const allToDos = ulList.querySelectorAll('li');

	if (allToDos.length === 0) {
		errorInfo.textContent = 'There are no tasks on To Do List.';
	}
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		addNewToDo();
	}
};

document.addEventListener('DOMContentLoaded', main);
