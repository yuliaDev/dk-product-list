import React, { useState } from 'react';
import ListItem from '@/components/product-list/list-item/list-item';
import AddListItem from '@/components/product-list/add-list-item/add-list-item';

import './product-list.css';

const ProductList = ({
	dictionary = [],
	placeholder = 'list item',
	toDoListTitle = '',
	doneListTitle = '',
	toDoListClasses = 'dk-todo-list',
	doneListClasses = 'dk-done-list',
	listTileClass = '',
	subparagraphIndent = 40,
}) => {
	const [list, setList] = useState([...dictionary]);
	const [toDoList, setToDoList] = useState([]);
	const [doneList, setDoneList] = useState([]);

	const isInList = (item, set) => {
		return set.some((i) => i.title === item.title);
	};

	const hasChildren = (set, item) => {
		return set.filter((el) => el.parent === item.title);
	};

	const moveFromSourceListToTarget = (selectedItem, sourceList, setSourceList, targetList, setTargetList) => {
		if (selectedItem.parent && selectedItem.parent.length) {
			const [parentItem] = sourceList.filter((item) => item.title === selectedItem.parent);
			if (!isInList(selectedItem, targetList)) {
				if (isInList(parentItem, targetList)) {
					setTargetList([...targetList, selectedItem]);
				} else {
					setTargetList([...targetList, selectedItem, parentItem]);
				}
				if (hasChildren(sourceList, parentItem) && hasChildren(sourceList, parentItem).length > 1) {
					setSourceList(sourceList.filter((item) => item.title !== selectedItem.title));
				} else {
					setSourceList(
						sourceList.filter((item) => item.title !== selectedItem.title && item.title !== selectedItem.parent),
					);
				}
			}
		} else {
			if (hasChildren(sourceList, selectedItem).length) {
				const children = hasChildren(sourceList, selectedItem);
				let arr = [selectedItem];
				let leftList = sourceList.filter((item) => item.title !== selectedItem.title);
				children.map((el) => {
					if (!isInList(el, targetList)) {
						arr.push(el);
						leftList = leftList.filter((item) => item.title !== el.title);
					}
				});
				setTargetList([...targetList, ...arr]);
				setSourceList(leftList);
			} else {
				setTargetList([...targetList, selectedItem]);
				setSourceList(sourceList.filter((item) => item.title !== selectedItem.title));
			}
		}
	};

	const addNewItem = (newItem) => {
		moveFromSourceListToTarget(newItem, list, setList, toDoList, setToDoList);
	};

	const moveToDone = (item) => {
		moveFromSourceListToTarget(item, toDoList, setToDoList, doneList, setDoneList);
	};

	const moveFromDoneToTodo = (item) => {
		moveFromSourceListToTarget(item, doneList, setDoneList, toDoList, setToDoList);
	};

	const deleteFromToDoList = (item) => {
		moveFromSourceListToTarget(item, toDoList, setToDoList, list, setList);
	};

	const deleteFromDoneList = (item) => {
		moveFromSourceListToTarget(item, doneList, setDoneList, list, setList);
	};

	const renderList = (selectedList, moveFromList, deleteFromList, listTitle, listClassNames, isChecked = false) => {
		return (
			<ul className={`list-group ${listClassNames}`}>
				{listTitle && (
					<li className={`list-group-item d-flex justify-content-between ${listTileClass}`}>{listTitle}</li>
				)}
				{selectedList.map((item) => {
					if (!item.parent) {
						return (
							<>
								<ListItem
									item={item}
									key={item.name}
									onHandleCheck={moveFromList}
									deleteFromList={deleteFromList}
									isChecked={isChecked}
								/>
								{hasChildren(selectedList, item) && hasChildren(selectedList, item).length
									? hasChildren(selectedList, item).map((el) => {
											return (
												<ListItem
													item={el}
													key={el.name}
													onHandleCheck={moveFromList}
													subcategoryStyle={{ paddingLeft: `${subparagraphIndent}px` }}
													deleteFromList={deleteFromList}
													isChecked={isChecked}
												/>
											);
									  })
									: null}
							</>
						);
					}
				})}
			</ul>
		);
	};

	return (
		<div className="product-list">
			<div className="row">
				<div className="col-12">
					{toDoList && renderList(toDoList, moveToDone, deleteFromToDoList, toDoListTitle, toDoListClasses)}
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<AddListItem list={list} addNewItem={addNewItem} placeholder={placeholder} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					{doneList &&
						renderList(doneList, moveFromDoneToTodo, deleteFromDoneList, doneListTitle, doneListClasses, true)}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
