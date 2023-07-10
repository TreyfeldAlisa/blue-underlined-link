import styles from "./Background.module.css";
import cn from "classnames";

export default function Background() {
    return (
        <div className={cn(styles.container)}>
            <div className={styles.shape} />
            <div className={styles.videoContainer}>
                <video
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                    className={cn(styles.video, "embed-responsive-item")}
                >
                    <source src={"./video/ASCII.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
