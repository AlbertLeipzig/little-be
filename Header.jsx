export const Header () => {
    const handleHeaderButton = () => console.log("hello");
    return(
        <header>
            <button onClick={()=> handleHeaderButton()}></button>
        </header>
    )
}