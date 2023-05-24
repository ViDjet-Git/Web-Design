import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';

var file = window.location.pathname.split('/').pop();
console.log(file);

let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListView);

console.log(controller.active);
if(file == 'profile.html'){
	console.log("Build profile");
	controller.buildProfile(0);
}

if(file == 'create.html'){
	console.log("Create html");
}

if(file == 'home.html') {
	console.log('Generate home');
	controller.buildHome();
}

if(file == 'vote.html') {
	controller.buildVote();
}