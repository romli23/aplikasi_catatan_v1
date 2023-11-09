import { Item } from "../components/Item";


 function Home(props){
    const {items} = props;
    return(
        
        <div className="catat">
            
            {items.map((item) => {
                return <Item judul={item.judul} date={item.date} description={item.description} />;
            })}
          
            
        </div>
  
    );
 }

 export {Home};