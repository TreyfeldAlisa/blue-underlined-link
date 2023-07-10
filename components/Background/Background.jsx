import cn from "classnames";

import styles from "./Background.module.css";

import background from "../../public/video/ASCII.mp4";

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
                    src={background}
                />
            </div>
        </div>
    );
}
