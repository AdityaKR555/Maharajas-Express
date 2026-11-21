import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageParts';
import { photos } from '../data/site';
import { Arrow } from '../components/Icons';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="This platform doesn’t exist" text="The page you’re looking for has left the station." img={photos.train} seed="404" />
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/" className="btn btn--maroon">
            Back to home <Arrow size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
