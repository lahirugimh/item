/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./CustomerCare.module.css";

function CustomerCare() {
  return (
    <section className={styles.customerCare}>
      <h2 className={styles.sectionTitle}>CUSTOMER CARE</h2>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            At [Your Company Name], we pride ourselves on providing exceptional
            customer care. Our dedicated support team is here to assist you with
            any inquiries, from booking photography sessions to resolving issues
            with your orders.
          </p>
          <ul className={styles.careList}>
            <li>
              <strong>24/7 Support:</strong> We are available around the clock
              to answer your questions and address your concerns.
            </li>
            <li>
              <strong>Personalized Service:</strong> We take the time to
              understand your needs and provide customized solutions.
            </li>
            <li>
              <strong>Satisfaction Guaranteed:</strong> Your happiness is our
              priority, and we strive to exceed your expectations.
            </li>
          </ul>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ded062365fd925eecb4cd9fcd2f66163011e1bd3d4a5e35f5bee87e7316e77d?placeholderIfAbsent=true&apiKey=2ced3db22aac4ec9b3a268650a41a373"
          alt="Customer care representative"
          className={styles.careImage}
        />
      </div>
    </section>
  );
}

export default CustomerCare;