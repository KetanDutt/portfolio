import styles from './header.module.scss';
import classNames from 'classnames';
import img from '../../assets/logo.jpeg';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logoParent}>
                <img
                    src={img}
                    className={styles.logoHeader}
                />
            </div>
            <p className={styles.header}>Ketan Dutt</p>
            <p className={styles.description}>A Passionate Game Developer from India</p>
            <p className={styles.connectText}>Connect with me</p>
            <div className={styles.connectImgParent}>
                <a href="mailto:ketan6196@gmail.com" target="_blank" rel="noreferrer">
                    <img
                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/gmail.png"
                        className={styles.connectImg}
                    />
                </a>
                <a href="https://github.com/KetanDutt" target="_blank" rel="noreferrer">
                    <img
                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/github.png"
                        className={styles.connectImg}
                    />
                </a>
                <a
                    href="https://www.instagram.com/k10.dutt/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/instagram.png"
                        className={styles.connectImg}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/ketan-dutt-006104b7/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/linkedin.png"
                        className={styles.connectImg}
                    />
                </a>
            </div>
        </div>
    );
};
