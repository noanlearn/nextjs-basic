import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome, noanlearn</h1>
    </Layout>
  );
}
