// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
// import Link from "next/link";
import Main from "@/components/Main";
import Hero from "@/components/Hero";
import Features from "~/components/Features";

// import { api } from "~/utils/api";
import Footer from "~/components/Footer";
import CTA from "~/components/CTA";
import BlogSection from "~/components/BlogSection";
import LogoSection from "~/components/LogoSection";
import TestimonialSection from "~/components/TestimonialSection";
// import FeaturesSection from "~/components/FeatureSection";
// import { Button } from "@nextui-org/react";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Main>
        <Hero />
        <Features />
        <CTA />
        {/* <FeaturesSection /> */}
        <BlogSection />
        <TestimonialSection />
        <LogoSection />
        <Footer />
      </Main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
