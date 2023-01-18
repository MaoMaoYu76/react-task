import { db } from "./firebase";
import "./index.css";
import { useState, useEffect } from "react";
import React from "react";
import { collection, addDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

function Items(props) {
    let list =
        <>
            <li className="list">{props.brand}
                <button className="deletebutton" onClick={() => props.handleDelete(props.id)} type="submit">Delete</button>
            </li>
        </>
    return list
}

function MyComponent() {
    const [List, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        collection(db, "todo").onSnapshot((snapshot) => {
            const todos = snapshot.docs.map((doc) => doc.data());
            setItems(todos);
        });
    }, []);

    const handleAddItem = async () => {
        await addDoc(collection(db, "todo"), { item: newItem,id: firebase.firestore().collection("todo").doc().id });
        setItems([...List, newItem]);
        setNewItem('');
    }

    const handleChange = (event) => {
        setNewItem(event.target.value);
    }

    const handleDelete = (id) => {
        firebase.firestore().collection("todo").doc(id).delete();
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
                    {List.map((item, index) => <Items key={index} brand={item} handleDelete={handleDelete} id={index} />)}
                </ul>
            </div>
        </>
    );
}

export default MyComponent