import "./index.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
function Items(props) {
    let list =
        <>
            <li className="list">{props.brand}
                <button className="deletebutton" onClick={() => props.handleDelete(props.id)}  type="submit">Delete</button>
            </li>
        </>
    return list
}

function MyComponent() {
    const [showInput, setShowInput] = useState(false);
    const [List, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        setItems([...List, newItem]);
        setNewItem('');
    }

    const handleChange = (event) => {
        setNewItem(event.target.value);
    }

    function handleClick() {
        setShowInput(true);
    }

    const handleDelete = (index) => {
        setItems(List.filter((item, i) => i !== index));
    };


    return (
        <div>
            {!showInput && (
                <>
                    <div className="welcome">Welcome　My　Page</div>
                    <div className="buttoncontainer">
                        <button className="start" onClick={handleClick}>Click to Start</button>
                    </div>
                </>)}

            {showInput && (
                <>
                    <div className="inputzone">
                        <input className="input-text" value={newItem} onChange={handleChange} placeholder="add your Item" />
                        <button className="submitbutton" onClick={handleAddItem} type="submit">Submit</button>
                    </div>
                    <ul className="listzone">
                        {List.map((item,index) => <Items key={index} brand={item} handleDelete={handleDelete} id={index} />)}
                    </ul>
                </>

            )}
        </div>
    );
}


let header =
    <div className="container">
        <div className="nav">React 練習專案</div>
        <MyComponent />
    </div>


ReactDOM.render(header, document.getElementById("root"));


