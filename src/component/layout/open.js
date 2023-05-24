import Header from '../header/header';

export default function Global({ children }) {
    return (
        <div className='body-wrapper'>
            <Header />
            <div className='content-wrapper'>{children}</div>
        </div>
    );
}
