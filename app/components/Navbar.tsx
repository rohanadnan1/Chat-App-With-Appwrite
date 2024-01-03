import { Navbar as Nav, NavbarWrapper, AppName } from "../mui-components/NavbarStyles";
import {Telegram} from '@mui/icons-material';
import { useSelector } from "react-redux";

const Navbar = () => {
    const token = useSelector((state: any) => state.auth.token)
    console.log('token', token)
    return(
        <NavbarWrapper>
            <Nav>
                <AppName>Chat-App 
                    <Telegram sx={{fontSize: '2.5rem'}} />
                </AppName>
                {token && <p>Welcome <span style={{fontWeight: 'bold', fontSize: '20px', paddingLeft: '12px'}}>{token.name.toUpperCase()}</span></p>}
            </Nav>
        </NavbarWrapper>
    )
}

export default Navbar;