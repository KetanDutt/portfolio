import styles from './projects.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface ProjectsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-projectss-and-templates
 */
export const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.projects}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
