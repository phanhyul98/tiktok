import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/133112081_2910982859186594_7807663832646570208_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4RXEgVXidKYAX_Lc42U&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QssCsdmB3jtE6lsGHWaqsirIC64LOAJl5kLEwm5fx5Q&oe=62C74AC7"
                alt="Yuri"
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
