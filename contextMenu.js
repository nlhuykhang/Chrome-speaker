function onClickHandler(info, tab) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://localhost:3000/api/speech?message='+info.selectionText, true);

	xhr.onloadend = function(){
		var au = new Audio('http://localhost:3000'+xhr.responseText);
		au.play();
	};

	xhr.send();
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		'title': 'play sound',
		'contexts': ['selection'],
		'id': 'play-item'
	});
});