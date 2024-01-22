import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="container-notfound">
      <h1 className="title-notfound">Ooooops...</h1>
      <h1 className="title-notfound">Halaman yang Anda cari tidak ditemukan</h1>
    </div>
  );
}
