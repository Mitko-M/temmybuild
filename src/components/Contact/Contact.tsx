import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <p className={styles.enquiriesLabel}>Enquiries</p>

            <h2 className={styles.title}>
              Start Your
              <br />
              <em className={styles.titleEm}>Project</em>
            </h2>

            <p className={styles.description}>
              Tell us about your project and we'll come back to you within one
              business day with an honest assessment and, if appropriate, a site
              visit to quote.
            </p>

            <div className={styles.infoList}>
              {[
                {
                  icon: (
                    <path
                      d="M3 8l9 5 9-5M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ),
                  label: "Email",
                  value: "miro@mirokazic.com.au",
                },
                {
                  icon: (
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ),
                  label: "Phone",
                  value: "0412 345 678",
                },
                {
                  icon: (
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ),
                  label: "Service Area",
                  value: "Sydney Metro & Surrounds",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    <div className={styles.infoValue}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div>
            {sent ? (
              <div className={styles.sentWrapper}>
                <div className={styles.sentIconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#b89a6a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className={styles.sentTitle}>Message Received</h3>

                <p className={styles.sentText}>
                  Thanks for reaching out. Miro will personally review your
                  enquiry and be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className={styles.input}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                <div className={styles.row}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={styles.input}
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />

                  <div className={styles.selectWrapper}>
                    <select
                      className={`${styles.input} ${styles.dropdownMenu}`}
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                    >
                      <option value="">Service Type</option>
                      <option value="bathroom">Bathroom & Wet Areas</option>
                      <option value="kitchen">Kitchen Splashback</option>
                      <option value="stone">Natural Stone</option>
                      <option value="feature">Feature Wall / Floor</option>
                      <option value="outdoor">Outdoor & Pool</option>
                      <option value="commercial">Commercial</option>
                    </select>

                    <svg
                      className={`${styles.chevron} ${
                        form.service !== "" ? styles.chevronUp : ""
                      }`}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project — location, scope, timeline, and any materials in mind."
                  className={styles.textarea}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />

                <button type="submit" className={styles.submitBtn}>
                  Send Enquiry
                </button>

                <p className={styles.disclaimer}>
                  No spam. Your details are used only to respond to your
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
