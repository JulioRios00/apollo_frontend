import styles from "./page.module.css";
import ProductTable from "./components/ProductTable";

export default function Home() {
  return (
    <div className={styles.page}>
     <ProductTable />
    </div>
  );
}
