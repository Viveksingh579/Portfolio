import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b border-dotted border-neutral-900 hover:border-solid hover:text-blue-500 transition duration-200 ease-in-out"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
