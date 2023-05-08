import React, { useState } from "react";
import './ToDoList.css'
import ListItem from "./ListItem";


const ToDoList = () => {
    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState([]);
    const [err, seterr] = useState("");

    const inputhand = (e) => {
        let val = e.target.value;
        setItem(val)
        seterr("")
    }
    const btnclk = () => {
        if(item.length > 2){
            setListItem((olditem) => {
                return [...olditem, item]
            })
            setItem("")
        }
        else{
            seterr("Please! Fill this.");
        }
        
    }

    function removebtn(ind){
        setListItem((olditem) => {
            return olditem.filter((arrele,arrind) =>{
                return arrind !== ind;
            })
        })
    }

    return(
        <>
            <div className="main-cont">
                <div className="todo-cont">
                    <h1>ToDo List</h1>
                    <h2>&#169;SAM</h2>
                    <div className="todo-list-cont">
                        <ul>
                            {/* <li>{listItem}</li> */}
                            {listItem.map((ele, ind) => {
                                return <ListItem key = {ind} element = {ele} index = {ind} removeele = {removebtn}/>;
                            })}
                        </ul>
                    </div>
                    <div className="input-box-cont">
                        <input type="text" placeholder="Add a item" value={item} onChange={inputhand} autoComplete="off" autoFocus/>
                        <button onClick={btnclk} title="Add">+</button>
                    </div>
                    <p>{err}</p>
                </div>
            </div>
        </>
    );
}

export default ToDoList;