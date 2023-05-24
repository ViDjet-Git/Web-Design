import Item from "../model/Item.js";

var active;


export default class Controller {

    constructor(itemListView) {
        this.itemListView = itemListView;     
        if(window.location.pathname.split('/').pop() == 'create.html'){
            document.querySelector('#add').addEventListener('click', (e)=>this.onAddItem(e));
        }
        this.startIdclick('#reg', this.register);
        this.startIdclick('#signin', this.signIn);
        this.startIdclick('#create', this.create);
        this.active = false
    }

    startIdclick(id, func, arg = null){
        if(document.querySelector(id) != null){
            document.querySelector(id).addEventListener('click', ()=>func(arg));
        }else{
            console.log("No item");
        }
    }

    create() {
        var name = document.getElementById('name');
        var desc = document.getElementById('description');
        var textareas = document.querySelectorAll('#mainbody textarea');
        var variants = [];
        textareas.forEach(function(textarea) {
            console.log(textarea.value);
            variants.push(textarea.value);
        });
        var item = new Item(name.value, desc.value, variants);
        console.log(item);
        var itemString = JSON.stringify(item);
        document.cookie = 'items='+itemString;
        location.href='home.html';
    }

    register() {
        var err = false;
        var email = document.getElementById('email');
        var regexExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var username = document.getElementById('username');
        var birthday = document.getElementById('birthday');
        var gender = document.getElementById('gender');
        var password = document.getElementById('password');
        var repeatpass = document.getElementById('repeatpassword');
        if(email.value == "" || !regexExp.test(email.value)){
            console.log("Error! Email");
            email.classList.add('border-danger');
            err = true;
        } else {
            email.classList.remove('border-danger');
        }

        if(username.value == ''){
            console.log("Error! Username");
            username.classList.add('border-danger');
            err = true;
        } else{
            username.classList.remove('border-danger');
        }

        if(birthday.value == ""){
            console.log("Error! Birthday");
            birthday.classList.add('border-danger');
            err = true;
        } else{
            birthday.classList.remove('border-danger');
        }

        if(gender.value == "" || gender.value == "Your Gender"){
            console.log("Error! Gender");
            gender.classList.add('border-danger');
            err = true;
        } else{
            gender.classList.remove('border-danger');
        }

        if(password.value == ""){
            console.log("Error! Password");
            password.classList.add('border-danger');
            err = true;
        } else{
            password.classList.remove('border-danger');
        }

        if(repeatpass.value == "" || repeatpass.value != password.value){
            console.log("Error! repeatpassword");
            repeatpass.classList.add('border-danger');
            err = true;
        } else{
            repeatpass.classList.remove('border-danger');
        }

        if(!err){
            console.log(email.value);
            console.log(username.value);
            console.log(birthday.value);
            console.log(gender.value);
            console.log(password.value);
            console.log(repeatpass.value);
            var login = {email: email.value, pass: password.value, name: username.value,
                gender: gender.value, birthday: birthday.value};
            document.cookie = 'myArray=' + JSON.stringify(login);
            location.href='SignIn.html';
        }
        
    }

    signIn() {
        var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('myArray='))
            .split('=')[1];
        var login = JSON.parse(cookieValue);
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        if(email.value == login.email && password.value == login.pass){
            active = true;
        }
        if(active){
            console.log("email: " + email + "; password: " + password);
            location.href='home.html';
        } else{
            console.log("Error! SignIn");
            email.classList.add('border-danger');
            password.classList.add('border-danger');
        }

    }

    buildProfile(prof) {
        var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('myArray='))
            .split('=')[1];
        var login = JSON.parse(cookieValue);
        console.log(login);
        var name = document.getElementById('nickname');
        var email = document.getElementById('email');
        var gender = document.getElementById('gender');
        var birthday = document.getElementById('birthday');
        name.innerHTML = login.name;
        email.innerHTML = login.email;
        gender.innerHTML = login.gender;
        birthday.innerHTML = login.birthday;
        var signout = document.getElementById('signout');
        signout.innerHTML = 'Sign Out';
    }

    buildHome() {
        var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('items='))
            .split('=')[1];
        var items = JSON.parse(cookieValue);
        console.log(items);
        var body = document.getElementById('main');
        var newItem = document.createElement('tr');
        newItem.innerHTML = this.itemListView.newItem(items);
        body.appendChild(newItem);
    }

    buildVote() {
        var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('items='))
            .split('=')[1];
        var items = JSON.parse(cookieValue);
        console.log(items);
        var name = document.getElementById('name');
        name.innerHTML = `${items.name}`;
        var desc = document.getElementById('description');
        desc.innerHTML = `${items.description}`;
        var i = 0;
        for(var vars of document.querySelectorAll('.var')){
            vars.innerHTML = `${items.vars[i]}`;
            console.log(items.vars[i]);
            i++;
        }
    }

    onAddItem() {
        console.log('onAddItem');
        var tbody = document.getElementById('mainbody');
        var elem = document.querySelector('.to-do');
        elem.innerHTML = this.itemListView.toHtml();
        elem.classList.remove('to-do');
        var endRow = document.createElement('tr');
        endRow.classList.add('to-end');
        tbody.appendChild(endRow);
        document.querySelector('.to-end').innerHTML = this.itemListView.endHtml();
        endRow.classList.remove('to-end');
        endRow.classList.add('to-end');
        //document.querySelector('.to-end').classList.remove('to-end');
    }
}