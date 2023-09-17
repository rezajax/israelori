import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "~/components/Features";
import Footer from "@/components/Footer";
import ContactUsComponent from "~/components/ContactUsComponent";



const ContactUs = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <Layout>
        {/* <Hero />
        <Features /> */}
        <ContactUsComponent />
        {/* <Footer /> */}
      </Layout>
    </>
  );
};
export default ContactUs;
