import Image from "next/image";
import styles from "./page.module.css";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

export default function Home() {
  return (
    <div className={styles.page}>
     <ProductTable />
    </div>
  );
}
