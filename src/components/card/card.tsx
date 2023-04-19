import styles from './card.module.scss';
import classNames from 'classnames';
import Projects_module from '../projects/projects.module.scss';

export interface CardProps {
    className?: string;
    name?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, name }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={Projects_module.Card}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={Projects_module.cardImg}
                />
                <p className={Projects_module.cardHeading}>{name}</p>
            </div>
        </div>
    );
};
