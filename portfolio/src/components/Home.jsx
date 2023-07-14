import Naruto from '../assets/naruto-uzumaki.png';
import 'animate.css';

export default function Home() {
    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Naruto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold animate__animated animate__fadeInDown animate__delay-2s">Welcome to me portfolio</h1>
                        <p className="py-6"></p>
                        
                    </div>
                </div>
            </div>
        </>
    );
}