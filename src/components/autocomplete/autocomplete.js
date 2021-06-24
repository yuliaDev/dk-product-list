import React, { useState, useEffect } from 'react';
import './autocomplete.css';

const Autocomplete = ({ suggestions = [], addNewItem, placeholder }) => {
	const [params, setParams] = useState({
		activeSuggestion: 0,
		filteredSuggestions: [],
		showSuggestions: false,
		userInput: '',
	});

	const onChange = (e) => {
		const userInput = e.currentTarget.value;

		// Filter our suggestions that don't contain the user's input
		const filteredSuggestions = userInput.length
			? suggestions.filter((suggestion) => suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1)
			: [];

		setParams({
			activeSuggestion: 0,
			filteredSuggestions: filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value,
		});
	};

	const onClick = (item) => {
		addNewItem(item);
		setParams({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: '',
		});
	};

	const onKeyDown = (e) => {
		const { userInput, activeSuggestion, filteredSuggestions } = params;

		// User pressed the enter key
		if (e.keyCode === 13) {
			if (filteredSuggestions && filteredSuggestions.length) {
				addNewItem(filteredSuggestions[activeSuggestion]);
			} else {
				addNewItem({ title: userInput });
			}
			setParams({
				activeSuggestion: 0,
				filteredSuggestions: [],
				showSuggestions: false,
				userInput: '',
			});
		}
		// User pressed the up arrow
		else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			setParams({ ...params, activeSuggestion: activeSuggestion - 1 });
		}
		// User pressed the down arrow
		else if (e.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			setParams({ ...params, activeSuggestion: activeSuggestion + 1 });
		}
	};

	return (
		<div className="autocomplete">
			<input
				type="text"
				placeholder={placeholder}
				className="no-border"
				onChange={onChange}
				onKeyDown={onKeyDown}
				value={params.userInput}
			/>
			{params.filteredSuggestions.length ? (
				<div className="border rounded autocomplete-options">
					{params.filteredSuggestions.map((suggestion, index) => {
						return (
							<div
								className={`m-1 suggestion ${index === params.activeSuggestion ? 'suggestion-active' : ''}`}
								key={suggestion.index}
								onClick={() => onClick(suggestion)}
							>
								{suggestion.title}
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default Autocomplete;
