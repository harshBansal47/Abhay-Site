import LocationPoint from '@/public/location.png';
import Image from 'next/image';


export default function MapView() {
    return (<div className="w-11/12 mx-auto rounded-lg my-10 h-[400px] p-7 bg-slate-100 flex justify-center shadow-sm items-center">
        <div className="w-full h-full rounded-lg border relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.507651239033!2d76.84520701333997!3d24.675069959363697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397aebe8c9057bd1%3A0x4fad696717ce01ae!2sShanti%20Accounting%20and%20Taxation!5e0!3m2!1sen!2sin!4v1725734437966!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Image
                width={32}
                height={50}
                className="location-finder"
                src={LocationPoint}
                alt="location"
            />
        </div>
    </div>)
}