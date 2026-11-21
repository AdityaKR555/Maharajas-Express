import { PageHero } from '../components/PageParts';
import { photos } from '../data/site';

// PLACEHOLDER legal copy. Replace with your reviewed policy text.
const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', 'Details you submit through our booking and contact forms, such as your name, email, phone number, country and travel preferences.'],
      ['How we use it', 'To respond to your enquiry, prepare quotes and administer your booking with the train operator.'],
      ['Sharing', 'We share the information needed to arrange your journey with the operator and service providers involved.'],
      ['Your rights', 'You may ask to access, correct or delete your information by emailing our booking team.'],
    ],
  },
  terms: {
    title: 'Terms And Conditions',
    sections: [
      ['Bookings', 'Enquiries submitted online are not confirmed bookings. An agent will confirm availability and next steps.'],
      ['Fares & payments', 'Fares depend on journey, departure date and cabin, and will be confirmed in writing by your agent.'],
      ['Changes & cancellations', 'Changes and cancellations are subject to the operator’s policy, communicated at the time of booking.'],
      ['Liability', 'Itineraries may change due to operational or safety reasons.'],
    ],
  },
};

export default function Legal({ kind }) {
  const c = content[kind];
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={c.title}
        img={photos.taj}
        seed={kind}
        crumbs={[{ label: c.title }]}
      />
      <section className="section">
        <div className="container container--narrow legal">
          <p className="fine">Placeholder content for the demo. Replace with your final legal text.</p>
          {c.sections.map(([h, t]) => (
            <div key={h}>
              <h3>{h}</h3>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
