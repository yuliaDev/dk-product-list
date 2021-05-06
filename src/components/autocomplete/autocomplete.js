import React, { useState, useEffect } from 'react';
import './autocomplete.scss';

const Autocomplete = ({ suggestions = [] }) => {
	const [params, setParams] = useState({
		activeSuggestion: 0,
		filteredSuggestions: [],
		showSuggestions: false,
		userInput: '',
	});

	const onChange = (e) => {
		const userInput = e.target.value;
		console.log('suggestions', suggestions);

		// Filter our suggestions that don't contain the user's input
		const filteredSuggestions = suggestions.filter(
			(suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) !== -1,
		);

		setParams({
			activeSuggestion: 0,
			filteredSuggestions: filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value,
		});
	};

	const onClick = (e) => {
		setParams({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: e.currentTarget.innerText,
		});
	};

	const onKeyDown = (e) => {
		const { activeSuggestion, filteredSuggestions } = params;

		// User pressed the enter key
		if (e.keyCode === 13) {
			setParams({
				...params,
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion],
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

	const handleFocus = () => {
		console.log('focus');
	};

	// let suggestionsListComponent = 'h1';

	useEffect(() => {
		console.log('ok');
		if (params.showSuggestions && params.userInput) {
			console.log('ok1');
			if (params.filteredSuggestions.length) {
				console.log('ok2');
			}
		}
	});

	return (
		<div className="autocomplete">
			<input
				type="text"
				placeholder="list item"
				className="no-border"
				onFocus={handleFocus}
				onChange={onChange}
				value={params.userInput}
			/>
			{params.filteredSuggestions.length ? (
				<div className="border rounded autocomplete-options">
					{params.filteredSuggestions.map((suggestion) => {
						return (
							<div className="m-1" key={suggestion.index}>
								{suggestion}
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default Autocomplete;
