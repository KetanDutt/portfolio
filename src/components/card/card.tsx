import styles from './card.module.scss';
import classNames from 'classnames';
import Header_module from '../header/header.module.scss';

export interface CardProps {
    className?: string;
    src?: string;
    name?: string;
    link?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, src, name, link }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href={link} target="_blank" rel="noreferrer" className={styles.root}>
                <img src={src} className={styles.cardImg} />
                <p className={styles.CardHeading}>{name}</p>
            </a>
        </div>
    );
};
