import Hero from '../components/home/Hero';
import ContactStrip from '../components/home/ContactStrip';
import About from '../components/home/About';
import Journeys from '../components/home/Journeys';
import BookingGuide from '../components/home/BookingGuide';
import BookingForm from '../components/home/BookingForm';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <ContactStrip />
      <About />
      <Journeys />
      <BookingGuide />
      <BookingForm />
      <Testimonials />
      <Faq />
    </>
  );
}
