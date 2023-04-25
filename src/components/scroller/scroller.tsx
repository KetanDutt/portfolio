import styles from './scroller.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import StrikeForce from "../../assets/games/Strikeforce.webp";
import FruitCutter from "../../assets/games/FruitCutter.png";
import MissionDestruction from "../../assets/games/MissionDestruction.png";
import StreetRacer from "../../assets/games/StreetRacer.png";
import Archery3D from "../../assets/games/Archery3D.png";
import google from "../../assets/playIcon.png";
import amazon from "../../assets/amazon.webp";
import roku from "../../assets/roku.png";

export interface ScrollerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-scrollers-and-templates
 */
export const Scroller = ({ className }: ScrollerProps) => {
    var games = [
        {
            "src": StrikeForce,
            "name": "Strike Force - 1945 War",
            "link": "https://play.google.com/store/apps/details?id=com.renderedideas.skyforce1945",
            "icon": google
        },
        {
            "src": FruitCutter,
            "name": "Fruit Cutter",
            "link": "https://www.amazon.com/Rendered-Ideas-Fruit-Cutter/dp/B07XVBYM8J",
            "icon": amazon
        },
        {
            "src": StreetRacer,
            "name": "Street Racer",
            "link": "https://channelstore.roku.com/en-ot/details/1c447b3e67cc8065073b440dc3e4dfe9/street-racer",
            "icon": roku
        },
        {
            "src": Archery3D,
            "name": "Archery 3D",
            "link": "https://channelstore.roku.com/en-ot/details/2edfa2fc934a314ec657942166bbc853/archery-3d",
            "icon": roku
        },
        {
            "src": MissionDestruction,
            "name": "Mission Destruction",
            "link": "https://www.amazon.com/Rendered-Ideas-Mission-Destruction/dp/B07ZGLB3HS",
            "icon": amazon
        }
    ]

    var gamesComponents = games.map((game) => <Card src={game.src} name={game.name} link={game.link} icon={game.icon} />);
    return <div className={classNames(styles.root, className)}>{gamesComponents}</div>;
};
