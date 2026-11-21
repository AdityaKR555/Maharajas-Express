import { useMemo, useState } from 'react';
import Reveal from '../Reveal';
import Img from '../Img';
import { contacts, countries, journeys, photos } from '../../data/site';
import { Check, Mail, Phone } from '../Icons';

const initial = {
  prefix: '',
  name: '',
  email: '',
  mobile: '',
  country: '',
  adults: '',
  children5to12: '0',
  childrenBelow5: '0',
  tour: '',
  date: '',
  message: '',
};

// Defined at module level so inputs keep focus between renders.
function Field({ id, label, required, children, wide, error }) {
  return (
    <div className={`field ${wide ? 'field--wide' : ''} ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <b aria-hidden="true"> *</b>}
      </label>
      {children}
      {error && <small role="alert">{error}</small>}
    </div>
  );
}

const range = (from, to) => Array.from({ length: to - from + 1 }, (_, k) => from + k);
const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const tour = useMemo(() => journeys.find((j) => j.slug === form.tour), [form.tour]);
  const toll = contacts[0];

  const set = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value, ...(key === 'tour' ? { date: '' } : {}) }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email address';
    if (form.mobile.replace(/\D/g, '').length < 7) er.mobile = 'Enter a valid mobile number';
    if (!form.adults) er.adults = 'Select the number of adults';
    if (!form.tour) er.tour = 'Please select a journey';
    if (!form.date) er.date = 'Select a departure date';
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.querySelector('.bform [aria-invalid="true"]')?.focus();
      return;
    }
    // TODO: send `form` to your backend / email service
    console.log('Booking enquiry', { ...form, tour: tour?.title });
    setSent(true);
  };

  const input = (id, props = {}) => (
    <input
      id={id}
      value={form[id]}
      onChange={set(id)}
      aria-invalid={!!errors[id]}
      {...props}
    />
  );

  return (
    <section className="booking section" id="book">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Reserve your place</span>
          <h2 className="h2">
            Online booking of the <em>Maharajas’ Express</em>
          </h2>
          <p className="lead">Please fill in your booking details and our agents will get in touch with you.</p>
        </Reveal>

        <Reveal className="booking__card">
          <aside className="booking__aside">
            <Img src={photos.jaipur} alt="" seed="booking" />
            <div className="booking__aside-inner">
              <span className="eyebrow">Personal service</span>
              <h3>A journey this special deserves a personal touch.</h3>
              <p>Every booking is handled by a dedicated agent who will guide you from cabin choice to departure.</p>
              <ul>
                <li>
                  <Phone size={18} /> <a href={toll.href}>{toll.display}</a>
                </li>
                <li>
                  <Mail size={18} /> <a href="mailto:booking@maharajaexpress.com">booking@maharajaexpress.com</a>
                </li>
              </ul>
            </div>
          </aside>

          {sent ? (
            <div className="bform bform--sent" role="status">
              <span className="sent__icon">
                <Check size={30} />
              </span>
              <h3>Thank you, {form.name.split(' ')[0] || 'traveller'}.</h3>
              <p>
                We’ve received your enquiry for <strong>{tour?.title}</strong>. One of our agents will contact you
                shortly.
              </p>
              <button
                className="btn btn--outline"
                onClick={() => {
                  setForm(initial);
                  setSent(false);
                }}
              >
                Make another enquiry
              </button>
            </div>
          ) : (
            <form className="bform" onSubmit={onSubmit} noValidate>
              <div className="field-row field-row--prefix">
                <Field error={errors.prefix} id="prefix" label="Prefix">
                  <select id="prefix" value={form.prefix} onChange={set('prefix')}>
                    <option value="">—</option>
                    {['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'].map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field error={errors.name} id="name" label="Your name" required>
                  {input('name', { autoComplete: 'name' })}
                </Field>
              </div>

              <div className="field-row">
                <Field error={errors.email} id="email" label="Email" required>
                  {input('email', { type: 'email', autoComplete: 'email' })}
                </Field>
                <Field error={errors.mobile} id="mobile" label="Mobile number" required>
                  {input('mobile', { type: 'tel', autoComplete: 'tel' })}
                </Field>
              </div>

              <div className="field-row">
                <Field error={errors.country} id="country" label="Country">
                  <select id="country" value={form.country} onChange={set('country')}>
                    <option value="">Select your country</option>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field error={errors.adults} id="adults" label="Adults" required>
                  <select id="adults" value={form.adults} onChange={set('adults')} aria-invalid={!!errors.adults}>
                    <option value="">Select</option>
                    {range(1, 10).map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="field-row">
                <Field error={errors.children5to12} id="children5to12" label="Children between 5 – 12">
                  <select id="children5to12" value={form.children5to12} onChange={set('children5to12')}>
                    {range(0, 6).map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
                <Field error={errors.childrenBelow5} id="childrenBelow5" label="Children below 5">
                  <select id="childrenBelow5" value={form.childrenBelow5} onChange={set('childrenBelow5')}>
                    {range(0, 6).map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field error={errors.tour} id="tour" label="Please select a tour" required wide>
                <select id="tour" value={form.tour} onChange={set('tour')} aria-invalid={!!errors.tour}>
                  <option value="">Choose your journey</option>
                  {journeys.map((j) => (
                    <option key={j.slug} value={j.slug}>
                      {j.title} · {j.nights}N / {j.days}D
                    </option>
                  ))}
                </select>
              </Field>

              <Field error={errors.date} id="date" label="Select departure date" required wide>
                <select
                  id="date"
                  value={form.date}
                  onChange={set('date')}
                  disabled={!tour}
                  aria-invalid={!!errors.date}
                >
                  <option value="">{tour ? 'Choose a departure' : 'Select a tour first'}</option>
                  {tour?.departures.map((d) => (
                    <option key={d} value={d}>
                      {fmtDate(d)}
                    </option>
                  ))}
                </select>
              </Field>

              <Field error={errors.message} id="message" label="Your message" wide>
                <textarea id="message" rows={4} value={form.message} onChange={set('message')} />
              </Field>

              <button type="submit" className="btn btn--maroon bform__submit">
                Submit Enquiry
              </button>
              <p className="bform__note">No payment is taken here. An agent will confirm availability and next steps.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
