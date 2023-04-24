import styles from './scroller.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface ScrollerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-scrollers-and-templates
 */
export const Scroller = ({ className }: ScrollerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};
