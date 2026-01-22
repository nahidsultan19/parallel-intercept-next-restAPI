import { getDictionary } from "../dictionaries/dictionaries";

const Contact = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>{dict.contact}</h1>
    </div>
  );
};

export default Contact;
