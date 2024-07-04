document.addEventListener('DOMContentLoaded',function(){
    fetch('https://api.github.com/users/ogiansouza')
    .then(function(res){
        return res.json()
    })
    .then(function(json){

        const elementAvatar = document.getElementById('avatar');
        elementAvatar.src = json.avatar_url

        const elementName = document.getElementById('name-h1');
        elementName.innerText = json.name;

        const elementUser = document.getElementById('name-h2');
        elementUser.innerText = json.login

        const seguidores = document.getElementById('seguidores');
        seguidores.innerText = json.followers;

        const seguindo = document.getElementById('seguindo');
        seguindo.innerText = json.following;

        const repositorios = document.getElementById('repositorios');
        repositorios.innerText = json.public_repos;

        const verGithub = document.getElementById('profile-link');
        verGithub.href = json.html_url;
    })
})