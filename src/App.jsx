import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import { JourneysPage, JourneyDetail } from './pages/Journeys';
import { TrainPage, TrainDetail } from './pages/Train';
import { DestinationsPage, OtherTrainsPage } from './pages/Destinations';
import { FaresPage, OffersPage } from './pages/Fares';
import { GalleryPage, VideoGalleryPage } from './pages/Gallery';
import { ContactPage, FeedbackPage } from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="journeys" element={<JourneysPage />} />
        <Route path="journeys/:slug" element={<JourneyDetail />} />
        <Route path="train" element={<TrainPage />} />
        <Route path="train/:slug" element={<TrainDetail />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="other-trains" element={<OtherTrainsPage />} />
        <Route path="fares" element={<FaresPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="video-gallery" element={<VideoGalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="privacy-policy" element={<Legal kind="privacy" />} />
        <Route path="terms" element={<Legal kind="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
