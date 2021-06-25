# Список покупок/справ

##Props
___
###dictionary
Список, з якого можна вибирати пункти для довавання в toDoList. Підтримується однорівнева вкладеність. Пункти, що являються підпунктами повинні містити поле parent.

**_Тип:_** _{ title: string, parent?: string } [ ] | [ ]_

**_Default:_** _[ ]_

**_Приклад:_**

```
[
    { title: 'хліб', parent: '' },
	{ title: 'батон', parent: 'хліб' },
	{ title: 'булки', parent: 'хліб' },
	{ title: 'молоко' },
	{ title: 'кава' },
	{ title: 'чай' },
	{ title: 'масло' },
	{ title: 'майонез' },
];
```

___
###placeholder
Плейсхолдер для поля додавання нового пункту

**_Тип:_** _string_

**_Default:_** _'list item'_

___
###toDoListTitle
**_Тип:_** _string_

**_Default:_** _''_

___
###doneListTitle
**_Тип:_** _string_

**_Default:_** _''_

___
###subparagraphIndent
Відступ для підпункта в пікселях

**_Тип:_** _number_

**_Default:_** _40_

---
###toDoListClasses
Класи для toDoList

**_Тип:_** _string_

**_Default:_** _'dk-todo-list'_

---
###doneListClasses
Класи для doneList

**_Тип:_** _string_

**_Default:_** _'dk-done-list'_

---
###listTileClass
Класи для назви списку

**_Тип:_** _string_

**_Default:_** _''_


