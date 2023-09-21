import styles from "./styles.module.css";
const DocsIdPage = ({ params }: { params: { id: string } }) => {
  return <div className={styles.title}>docs id page: {params.id}</div>;
};

export default DocsIdPage;
