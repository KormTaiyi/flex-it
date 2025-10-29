import Scroll from "../components/scroll-up/Scroll";
import Branch from "../components/contact-us/branch/Branch";
import Map from "../components/contact-us/map/Map";
import Form from "../components/contact-us/contact-form/Form";
import PropHeader from "../components/home/PropHeader/PropHeader";

const ContactPage = () => {
  return (
    <>
    <div>
      <PropHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact Us" },
        ]}/>
      <Branch/>
      <Map/>
      <div className="mt-5">
        <Form/>
      </div>
      <Scroll />
    </div>

    </>
  );
};

export default ContactPage;
