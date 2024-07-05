import './CircularText.scss';

const CircularText = ({ id, href, className, text }) => {
  return (
    <div className="icon-wrapper">
      <svg viewBox="0 0 100 100" className="circular-text">
        <defs>
          <path
            id={`circlePath-${id}`}
            d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text>
          <textPath xlinkHref={`#circlePath-${id}`}>
            {text} {text} {text}
          </textPath>
        </text>
      </svg>
      <div className="icon">
        <a href={href} className="nav__link">
          <i className={className}></i>
        </a>
      </div>
    </div>
  );
};

export default CircularText;
