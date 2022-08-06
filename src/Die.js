export default function Die(props) {
const styles = {
    backgroundColor: props.isHeld?"#59e391":"white"
}
    return(
        <div className="die" style={styles} onClick={props.holdDice}>
            <h2 className="num">{props.value}</h2>  
        </div>
    )
}