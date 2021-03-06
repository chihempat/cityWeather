import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGithub, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { logoutAction } from '../redux/Actions/userActions';
import { useDispatch } from 'react-redux';
import 'react-pro-sidebar/dist/css/styles.css';


const SideMenu = ({ history }) => {
    const dispatch = useDispatch();
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <SubMenu title="About US" icon={<FaHeart />}>
            <MenuItem icon={<FaGithub />}><a href="http://github.com/chihempat">Chintan</a></MenuItem>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </SubMenu>
          <MenuItem icon={<FaSignOutAlt />}>
            <span onClick={() => {
                dispatch(logoutAction());
                history.push('/');
              }
            }>Logout</span>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default SideMenu;