import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id: 1,
            name: 'Gomer',
            img: 'https://wordshow.ru/images/authors/size-160/54615455.jpg'
        },
        {
            id: 2,
            name: 'Bart',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HyrhymY3cwW9kVx3NJX6JeL19KlTzF9DgrU4Ou69Ur8zJh2blJK8kjXn7jHhB7rOuys&usqp=CAU'
        },
        {
            id: 3,
            name: 'Marge',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ8GB6Vi1ln24BLp9N2GPh3qEZv5FHaJBftAWcD6-eDxNUf0uSJPz6ybhVf5Yf5voLdc&usqp=CAU'
        },
        {
            id: 4,
            name: 'Lisa',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9q7owrKkd7c0C7u26QPtJ8AbKYoYsg7FlVLKeBvdNkdgUAxWHOK3-K8r5iIEk9HvJMqs&usqp=CAU'
        },
        {
            id: 5,
            name: 'Milhouse',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Mcf5ubV2T8oX6I3V4Ne3O8cYZ4JHCQX5ow&usqp=CAU'
        }
    ]

    return (
        <div>
            {characters.map(character=> <Character character={character} key={character.id}/>)},
        </div>
    );
};

export {App};