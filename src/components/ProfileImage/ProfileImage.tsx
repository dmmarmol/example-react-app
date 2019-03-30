import * as React from 'react';
import { Circle } from '../Styles';

interface IProfileImageProps {
    src: string;
}

const ProfileImage: React.SFC<IProfileImageProps> = props => (
    <Circle style={{ marginBottom: '1rem' }}>
        <img src={props.src} />
    </Circle>
);

export default ProfileImage;
