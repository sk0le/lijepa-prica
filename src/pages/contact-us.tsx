import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function ContactUs() {
  const [isNavBarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div
      style={{ backgroundImage: "url('/ng-2.png')" }}
      className="min-h-screen w-full h-full"
    >
      <Head>
        <title>Kontaktirajte nas - Lijepa prica</title>
      </Head>
      <Header isNavBarOpen={isNavBarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </div>
  );
}
