import { useRouter } from "next/navigation";

import styles from "../styles/Home.module.scss";
import { Formik, Form, Field } from "formik";

const Welcome = () => {
  const { welcome, formik } = styles;
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log("Форма отправлена:", values);
    router.push(`/allMovies`);
  };

  return (
    <div className={welcome}>
      Добро подаловать
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={formik}>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Welcome;
