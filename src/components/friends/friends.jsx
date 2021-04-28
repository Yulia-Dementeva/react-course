import s from './friends.module.css'


const Friends = (props) => {
    console.log(props.name[0])
    return (
        <div>
            <div className={s.friendsNav}>
                Friends
            </div>
            <div className={s.friendsAva}>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Friends