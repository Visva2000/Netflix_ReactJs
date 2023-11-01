import React from "react";
import Listitem from "./Listitems";

const users = [{
    name: "Tony",
    age: 22
},
{
    name: "stark",
    age: 32
},
{
    name: "steve",
    age: 52
},
{
    name: "Rogers",
    age: 42
},
{
    name: "Natasha",
    age: 42
}
]
const list = () => {
    return (
        <section className="list-section">
            {users.map((user) => (
                <Listitem user={user}/>
            ))}
        </section >
    );
};

export default list;