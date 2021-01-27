import React, { createRef, Component } from 'react'
import '../asset/index.css'

export default class todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    title: "学习",
                    finish: false,
                },
                {
                    title: "吃饭",
                    finish: true,
                },
                {
                    title: "喝水",
                    finish: true,
                }
            ]
        }
        this.inputToDo = createRef();
    }
    render() {
        return (
            <div>
                <header className="title">
                    <label for='title'>ToDoList</label>
                    <input
                        type="text"
                        id="title"
                        ref={this.inputToDo}
                        onKeyUp={e => { this.addToDo(e) }}>
                    </input>
                </header>
                <div className="container">
                    <h2>已完成事项</h2>
                    <hr />
                    <ul className="list">
                        {this.state.list.map((value, index) => {
                            if (value.finish) {
                                return (
                                    <li >
                                        <input
                                            key={index}
                                            type="checkbox"
                                            checked={value.finish}
                                            onChange={() => { this.checkboxChange(index) }}>
                                        </input>{value.title}
                                        <button
                                            onClick={() => { this.removeToDo(index) }}>删除</button>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <h2>未完成事件</h2>
                    <hr />
                    <ul className="list">
                        {this.state.list.map((value, index) => {
                            if (!value.finish) {
                                return (
                                    <li>
                                        <input
                                            key={index}
                                            type="checkbox"
                                            checked={value.finish}
                                            onChange={() => { this.checkboxChange(index) }}>
                                        </input>{value.title}
                                        <button
                                            onClick={() => { this.removeToDo(index) }}
                                        >删除</button>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    addToDo(e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            let newList = this.state.list;
            newList.push(
                {
                    title: this.inputToDo.current.value,
                    finish: false
                }
            );
            this.setState({
                list: newList,
            });
            this.inputToDo.current.value = "";
            console.log(this.state.list);
        }
    }
    checkboxChange(index) {
        let newList = this.state.list;
        newList[index].finish = !newList[index].finish;
        this.setState({
            list: newList
        })
    }
    removeToDo(index) {
        let newList = this.state.list;
        newList.splice(index, 1);
        this.setState({
            list: newList
        })
    }
}
