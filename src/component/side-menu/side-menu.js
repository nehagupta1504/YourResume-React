import { menu } from './menu';
const SideMenu = () => {
    return (
        <div className='sidemenu-bg'>
            {menu &&
                menu.length > 0 &&
                menu.map((el) => {
                    const { key, name, href } = el;
                    return (
                        <div key={key} className='sidemenu'>
                            <span className='icon icon_drag'>::</span>
                            <li className='submenu-list'>
                                <a href={href}>{name}</a>
                            </li>
                        </div>
                    );
                })}
        </div>
    );
};

export default SideMenu;
