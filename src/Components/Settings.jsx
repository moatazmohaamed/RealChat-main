import { Link } from 'react-router-dom';
import SettingsImg from "../img/Ellipse 1147.png"
function Settings() {
    return (
        <>
            <div className="col-3 bg-secondary px-4 pt-4">
                <div className="d-flex justify-content-start align-items-center gap-4">
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" className="d-inline" width="40" height="40" viewBox="0 0 12 24"><path fill="#4B4B4B" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" /></svg></Link>
                    <h1>Settings</h1>
                </div>
                <div className='d-flex justify-content-start align-items-center gap-4 px-3 py-5'>
                    <img src={SettingsImg} width="75px" height="75px" alt="" srcset="" />
                    <div>
                        <p className='m-0'>Shreyansh shah</p>
                        <p className='m-0'>Exploring  </p>
                    </div>
                </div>
                <div>
                    <Link className='d-flex justify-content-start align-items-center gap-4 text-decoration-none border-bottom py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#727375" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z" /></svg>
                        <p className='m-0 text-muted fw-semibold'>Notifications</p>
                    </Link>
                    <Link className='d-flex justify-content-start align-items-center gap-4 text-decoration-none border-bottom py-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#727375" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M106 134h44l14.1 30.56A30 30 0 0 0 128 174a30 30 0 0 0-36.11-9.46Zm5.54-12L128 86.32L144.47 122ZM134 192a18 18 0 0 1 36 0v15.64a89.3 89.3 0 0 1-36 10.14Zm-48 0a18 18 0 0 1 36 0v25.78a89.3 89.3 0 0 1-36-10.14Zm105.64-.36A93 93 0 0 1 182 200v-24a6 6 0 0 0-.55-2.51l-48-104a6 6 0 0 0-10.9 0l-48 104A6 6 0 0 0 74 176v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z" stroke-width="6" stroke="#727375"/></svg>
                        <p className='m-0 text-muted fw-semibold'>Theme</p>
                    </Link>
                    <Link className='d-flex justify-content-start align-items-center gap-4 text-decoration-none border-bottom py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#727375" fill-rule="evenodd" d="M8 9V6a4 4 0 1 1 8 0v3h3a1 1 0 0 1 1 .999V21a.997.997 0 0 1-1 1H5a1 1 0 0 1-1-.999V10a.997.997 0 0 1 1-1zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zm-4 1.2v10.6h13.6V10.2zm6.2 5.675a1.5 1.5 0 1 1 1.2 0V18h-1.2z" stroke-width="1" stroke="#727375" /></svg>
                        <p className='m-0 text-muted fw-semibold'>Privacy</p>
                    </Link>
                    <Link className='d-flex justify-content-start align-items-center gap-4 text-decoration-none border-bottom py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#727375" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="#727375" /></g></svg>
                        <p className='m-0 text-muted fw-semibold'>Security</p>
                    </Link>
                    <Link className='d-flex justify-content-start align-items-center gap-4 text-decoration-none border-bottom py-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#727375" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"/></g></svg>
                        <p className='m-0 text-muted fw-semibold'>Help</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Settings
