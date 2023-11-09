const Item = (props) => {
    return(
        <div className="catatan">
            <h3>{props.judul}</h3>
           
            <p>{props.description}</p>
            
            <p>{props.date}</p>
        </div>
    );
}
export {Item};