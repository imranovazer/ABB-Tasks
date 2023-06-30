let posts = [];
let users = [];


const loader = document.createElement('div');
loader.className = 'loader'


const deletePost = async (id) => {

    try {
        const res = await fetch(`https://ajax.test-danit.com/api/json/posts/${id}`,
            {
                method: 'DELETE'
            });

        if (res.ok) {

            const divToRemove = document.querySelector('.posts-container')
            divToRemove.innerHTML = ''
            const newData = posts.filter(e => e.id !== id);
            posts = [...newData];
            console.log('Post deleted')
            displayData(posts);
        }
    } catch (error) {
        console.log(error)
    }

}


const fetchPostsAndUsers = async () => {


    try {
        document.body.appendChild(loader);
        const request = await fetch('https://ajax.test-danit.com/api/json/posts');

        const res = await request.json()
        console.log(res)
        posts = [...res];
        const request2 = await fetch('https://ajax.test-danit.com/api/json/users');
        const res2 = await request2.json()
        console.log(res2)
        users = [...res2];
        displayData(posts)
        loader.remove();
    } catch (error) {
        console.log(error);
    }

}
fetchPostsAndUsers()




const container = document.querySelector('.posts-container');

const displayData = (posts) => {
    posts.map(e => {
        const user = users.find(user => user.id === e.userId);

        const newPost = document.createElement('div');
        newPost.className = 'post';

        const top = document.createElement('div');
        top.className = 'posts-container__top';

        const title = document.createElement('h1');
        title.innerHTML = `ID:${e.id}. ${e.title}`
        top.appendChild(title)
        const userInfo = document.createElement('div');
        userInfo.className = 'userInfo';
        userInfo.innerHTML = `<span style="color:black;font-weight:bold">User</span>: ${user.name} <span style="color:black;font-weight:bold">Email</span>:${user.email}`;
        top.appendChild(userInfo)

        const text = document.createElement('p');
        text.innerHTML = e.body;
        top.appendChild(text)

        const button = document.createElement('button');
        button.addEventListener('click', () => deletePost(e.id))
        button.className = 'delete-button';
        button.innerHTML = 'Delete'


        newPost.appendChild(top);

        newPost.appendChild(button)

        container.appendChild(newPost);
    })

}
