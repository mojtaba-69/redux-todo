import React, { useState } from 'react'

const AddTodo = () => {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputText);

    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={inputText} onChange={(e) => handleChange(e)} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddTodo