import {
    ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaHeart, FaRegLaughWink, FaList } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

function Navigation() {

    return (
        <ProSidebar collapsed={false} toggled={true} breakPoint="md">
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Menu
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>

                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        icon={<FaHeart />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaList />}>
                        <MenuItem>submenu 1 </MenuItem>
                        <MenuItem>submenu 2 </MenuItem>
                        <SubMenu title={`$submenu 3`}>
                            <MenuItem>submenu 3.1 </MenuItem>
                            <MenuItem>submenu 3.2 </MenuItem>
                            <SubMenu title={`$submenu 3.3`}>
                                <MenuItem>submenu 3.3.1 </MenuItem>
                                <MenuItem>submenu 3.3.2 </MenuItem>
                                <MenuItem>submenu 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>

            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                asda
            </SidebarFooter>
        </ProSidebar>
    )

}

export default Navigation