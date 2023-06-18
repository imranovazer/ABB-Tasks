const books = [
    {
        author: "Lucy Foley",
        name: "List of Invitees",
        price: 70
    },
    {
        author: "Susanna Clarke",
        name: "Jonathan Strange & Mr Norrell",
    },
    {
        name: "Design. A Book for Non-Designers.",
        price: 70
    },
    {
        author: "Alan Moore",
        name: "Neonomicon",
        price: 70
    },
    {
        author: "Terry Pratchett",
        name: "Moving Pictures",
        price: 40
    },
    {
        author: "Angus Hyland",
        name: "Cats in Art",
    }
];



const root = document.querySelector('#root')
const ul = document.createElement('ul');
root.appendChild(ul)


books.map(e => {
    try {
        if (!e.price) {
            throw Error("Price property doesn't exsists")
        }
        if (!e.name) {
            throw Error("Name property doesn't exsists")
        }
        if (!e.author) {
            throw Error("Author property doesn't exsists")
        }
        const li = document.createElement('li');
        li.innerHTML = `Name : ${e.name} </br> Author : ${e.author} </br> Price : ${e.price}$`;
        ul.appendChild(li);

    } catch (error) {
        console.error(error)
    }

})



