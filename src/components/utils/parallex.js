import { Parallax } from 'react-parallax';
import img from '../../assets/developers-for-social-media-app.png'
const Container = () => (
    <Parallax  bgImage="path/to/image.jpg"  strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);