import { db } from "./firebase";
import "./index.css";
import { useState, useEffect } from "react";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";

function Items(props) {
    let list =
        <>
            <li className="list">{props.brand}
                <button className="deletebutton" onClick={() => props.handleDelete(props.id)} type="submit">Delete</button>
            </li>
        </>
    return list
}

function LIST() {
    const [List, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "todo"), (snapshot) => {
            let todosArr = [];
            snapshot.forEach((doc) => {
                console.log(doc)
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setItems(todosArr);
        });
        return () => unsub();
    }, []);

    const handleAddItem = async () => {
        setItems([...List, newItem]);
        await addDoc(collection(db, "todo"), { item: newItem });
        setNewItem('');
    }

    const handleChange = (event) => {
        setNewItem(event.target.value);
    }

    const handleDelete = async (id) => {
        const todoDoc = doc(db, "todo", id);
        await deleteDoc(todoDoc);
        setItems(List.filter((item) => item.id !== id));
    };


    return (
        <>
            <div className="container">
                <div className="nav">React 練習專案</div>
                <div className="inputzone">
                    <input className="input-text" value={newItem} onChange={handleChange} placeholder="add your Item" />
                    <button className="submitbutton" onClick={handleAddItem} type="submit">Submit</button>
                </div>
                <ul className="listzone">
                    {List.map((item, index) => <Items key={index} brand={item.item} handleDelete={handleDelete} id={item.id} />)}
                </ul>
            </div>
        </>
    );
}

export default LIST