import { NavLink } from 'react-router-dom'

export default function Sidebar () {
    return (
        <nav style={{ backgroundColor: ' #808080', height: '100%', paddingLeft: '15px', paddingTop: '10px' }}>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Logo</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>
                    <NavLink to="/discovery" style={{ display: 'flex', gap: 8, alignItems: 'center', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <>
                                <div style={{ height: '20px', width: '5px', backgroundColor: isActive ? '#c9eb10' : '#FFF' }} />
                                <span style={{color: 'white' }}>APPS DISCOVERY</span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/inventory" style={{ display: 'flex', gap: 8, alignItems: 'center', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <>
                                <div style={{ height: '20px', width: '5px', backgroundColor: isActive ? '#c9eb10' : '#FFF' }} />
                                <span style={{ color: 'white' }}>APPS INVENTORY</span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" style={{ display: 'flex', gap: 8, alignItems: 'center', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <>
                                <div style={{ height: '20px', width: '5px', backgroundColor: isActive ? '#c9eb10' : '#FFF' }} />
                                <span style={{ color: 'white' }}>SETTINGS</span>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
