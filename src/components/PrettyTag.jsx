import Styles from "../app.module.css";

function PrettyTag({ children }) {
    return (
        <>
            <span className={Styles.prettyTag}>&lt;</span>
            {children}
            <span className={Styles.prettyTag}> /&gt;</span>
        </>
    )
}

export default PrettyTag