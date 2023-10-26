let form = document.querySelector('form');
let details = document.querySelector('#details');
let toggle = document.querySelector('#toggle');
console.log(toggle);

function createProfile(input){
    details.innerHTML = "Loading please wait...";
    setTimeout(async() => {
        
        //* fetching API here ....
        let data = await fetch(`https://api.github.com/users/${input}`);
        let res = await data.json();
        console.log(res);
        details.innerHTML = "";
        if(res.message === "Not Found"){
            details.innerHTML = "User Not Found";
            return;
        }
        //* appending child here ....
        let contain = document.createElement('div');
        contain.innerHTML = `
            <div class="profileInfo">
            <div class="info">
                    <img src="${res.avatar_url}" alt="">
                    <div class="names">
                        <p>${res.name}</p>
                        <a href="${res.html_url}">@${res.login}</a>
                    </div>
                </div>
                <div class="date"> joined  ${new Date(res.created_at).toLocaleDateString('en-US')}</div>
            </div>
            <p style=" margin-top: 1rem;">${res.bio}</p>
            <div class="misc">
                <div class="repo misc-item">
                    <p>Repos</p>
                    <p>${res.public_repos}</p>
                </div>
                <div class="follower misc-item">
                    <p>Followers</p>
                    <p>${res.followers}</p>
                </div>
                <div class="following misc-item">
                    <p>Following</p>
                    <p>${res.following}</p>
                </div>
            </div>
            <div class="links">
                <div class="left">
                    <p>
                        <i class="fa-solid fa-map"> - </i>
                        <span>${res.location}</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-link"> - </i>
                        <span>${res.email}</span>
                    </p>
                </div>
                <div class="right">
                    <p>
                        <i class="fa-brands fa-twitter">-</i>
                        <span>${res.twitter_username}</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-building">-</i>
                        <span>${res.company}</span>
                    </p>
                </div>
            </div>
        `
        details.appendChild(contain); 
    }, 1500);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = e.target.children[1].value;
    createProfile(input);
});
let flag = false;
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(flag == false){
        toggle.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/>
        </svg>
        `
        flag = true;
    }
    else{
        toggle.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/>
        </svg>
        `
        flag = false;
    }
});
