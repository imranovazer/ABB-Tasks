let posts = [];
let users = [];


class Post {
    constructor(id, userId, body, title) {
        this.id = id;
        this.userId = userId;
        this.body = body;
        this.title = title;
    }
}

const add_button = document.querySelector('.add-button')
const create_modal = document.querySelector('.create-modal');

add_button.addEventListener('click', () => {

    create_modal.style.display = 'flex'
})

const hideModal = () => {

    create_modal.style.display = 'none'

}

const createPost = async () => {
    const text = document.querySelector('.text');
    const title = document.querySelector('.title');



    try {
        const request = await fetch('https://ajax.test-danit.com/api/json/posts', {
            method: 'POST',
            body: JSON.stringify({
                body: text.value,
                title: title.value,
                userId: 1
            })
        })

        if (request.ok) {

            const newPost = {
                id: posts.length + 1,
                body: text.value,
                title: title.value,
                userId: 1

            }
            posts.unshift(new Post(newPost.id, newPost.userId, newPost.body, newPost.title));
            const divToRemove = document.querySelector('.posts-container')
            divToRemove.innerHTML = '';
            displayData(posts);
            hideModal();
        }

    } catch (error) {
        console.log(error)
    }
}


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

const convertResponseToPostObjects = (data) => {
    posts = []
    data.map(e => {
        posts.push(new Post(e.id, e.userId, e.body, e.title));
    })

}



const fetchPostsAndUsers = async () => {


    try {
        document.body.appendChild(loader);
        const request = await fetch('https://ajax.test-danit.com/api/json/posts');

        const res = await request.json()
        console.log(res)
        convertResponseToPostObjects(res);
        // posts = [...res];
        console.log(posts)
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
