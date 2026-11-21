import { useState } from 'react';

/**
 * Image with a graceful fallback. Placeholders come from the internet; if one
 * fails to load we fall back to a seeded picsum image so the layout never breaks.
 */
export default function Img({ src, alt = '', seed = 'maharajas', className = '', ...rest }) {
  const [failed, setFailed] = useState(false);
  const url = failed ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/900` : src;
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => !failed && setFailed(true)}
      {...rest}
    />
  );
}
