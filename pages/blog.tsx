import Layout from "@/components/Layout";
import styles from "@/styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((post) => {
        return (
          <div key={post.id} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
