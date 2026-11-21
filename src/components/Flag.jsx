export default function Flag({ code, size = 22 }) {
  return (
    <img
      className="flag"
      src={`https://flagcdn.com/w80/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 1x, https://flagcdn.com/w160/${code}.png 2x`}
      width={size}
      height={size}
      alt=""
      loading="lazy"
    />
  );
}
