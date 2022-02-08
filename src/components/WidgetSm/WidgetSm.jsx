import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import './widgetSm.css';
import { userRequest } from '../../requestMethods';

const WidgetSm = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);
            } catch (error) {

            }
        }
        getUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map(user => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img src={user.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" className='widgetSmImage' />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSm;
