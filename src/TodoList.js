function TodoList({ children }) { //Las props permiten comunicar los componenetes

    return(
    <ul>
        {children} {/*Children se refieere a */}
    </ul>
    )

}

export { TodoList };