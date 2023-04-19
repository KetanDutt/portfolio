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
                <Card name='Game 1' />
                <Card name='Game 2' />
                <Card name='Game 3' />
                <Card name='Game 4' />
                <Card name='Game 5' />
                <Card name='Game 6' />
            </div>
        </div>
    );
};
