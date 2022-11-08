import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const navigate = useNavigate();



    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSumbit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput}
                    type="text"
                    value={search ?? ""}
                    autoFocus
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) =>{
                        const value = e.target.value;
                        navigate("/?search=" + value);
                    }}

                    
                />
                <button className={styles.searchButton} type="sumbit"> 
                    <FaSearch size={20} /> 
                </button>
            </div>
        </form>
    )
}
