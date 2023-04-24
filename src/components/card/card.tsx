import styles from './card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.cardImg}
            />
            <p className={styles.CardHeading}>Heading</p>
            <p className={styles.cardText}>This is a paragraph.</p>
        </div>
    );
};
