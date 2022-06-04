import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/282195933_1477406302714598_5916748901007568525_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_CmJ36EgxCMAX-yQeWG&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8ASpf_1NJE4FM5yhpNEM2M70RCvoYWppD3_dwp3zYb6A&oe=6291DE50"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Kwon Yuri</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phanhyuri</span>
            </div>
        </div>
    );
}

export default AccountItem;
