import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div>
            <Wave 
                fill='#E6B31E'
                opacity='40%'
                paused={false}
                options={{
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }} />
        </div>
    );
}

export default Footer;