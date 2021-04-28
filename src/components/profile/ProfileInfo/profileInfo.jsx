import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = (props) => {
    return <div>
        <div>
            <img className={s.pictureBlock}
                src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"></img>
        </div>
        <div className={s.descriptionBlock}>
            ava
        </div>
    </div>
}

export default ProfileInfo