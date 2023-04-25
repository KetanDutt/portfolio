import styles from './cv-download.module.scss';
import classNames from 'classnames';
import CVDoc from "../../assets/CV.pdf";
import CV from '../../assets/CV.png';

export interface CVDownloadProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cv-downloads-and-templates
 */
export const CVDownload = ({ className }: CVDownloadProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href={CVDoc} download="Ketan Dutt CV" target="_blank">
                <img src={CV} className={styles.CVImg} />
            </a>
        </div>
    );
};
