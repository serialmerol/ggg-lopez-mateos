
const styles = {
    header:"text-3xl font-extrabold underline text-primary pb-5",
}
  
const ItemListContainer = (props) => {    
    return(
        <div>
            <h1 className={styles.header}>Welcome Intrepid {props.job}</h1>
        </div>
    )
};

export default ItemListContainer