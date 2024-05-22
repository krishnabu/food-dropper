export const withPromotedrescard= (Rescard) =>{
    return (props) =>{
        return (
            <div>
                <Rescard {...props}/>
            </div>
        )
    }
}
