import Lottie from "react-lottie-player";
import lottiejson from '/public/404.json'
<<<<<<< HEAD
export default function Animation() {
    return(
        <Lottie
            loop
            animationData={lottiejson}
            play
        />
=======

export default function Animation(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh'
        }}>
            <Lottie
                loop
                animationData={lottiejson}
                play
                style={{ width: 550, height: 550 }}
            />
        </div>

        // <Lottie
        //     loop
        //     animationData={lottiejson}
        //     play
        // />
>>>>>>> 253e6d00c75adb2957d61248bc3afcf75c728236
    )
}