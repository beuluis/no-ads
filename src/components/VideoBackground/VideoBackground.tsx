import styles from "./VideoBackground.module.css";

const VideoBackground = ({
  videoId = "JNFX32Hz_N0",
  time = "3648s",
}: {
  videoId?: string;
  time?: string;
}) => (
  <>
    <div id={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding&mute=1&autoplay=1&loop=1&playlist=${videoId}&vq=highres&t=${time}`}
      ></iframe>
    </div>
    <div id={styles.overlay} />
  </>
);

export default VideoBackground;
