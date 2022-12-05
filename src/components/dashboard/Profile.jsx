import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

export default function Profile() {
    return(
        <div className="profile__container">
            <Avatar className="profile" label="X" size="small" shape="circle" />
            <Button className="p-button-link"> Sign out
            <i className="pi pi-sign-out"></i>
            </Button>
        </div>
    )
}
//onClick logout to mainpage