import Image from "next/image";
import styles from './firstsection.module.css'

const FirstSession = () => {
    return (
        <div className="w-full h-screen bg-background">
            <div className="h-full flex justify-center items-center">
                <div className="w-fit h-fit relative">
                    {/* Imagem giratoria */}
                    <Image className={`${styles.spin_animation} ${styles.appear_animation} absolute -top-[15%] left-[10px]`} src='/images/firstsection/02.svg' alt="02" width={85} height={85} />
                    {/* Texto */}
                    <div className="h-fit text-center flex overflow-hidden justify-center mr-10">
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_0} text-8xl font-extrabold`}>M</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_1} text-8xl font-extrabold`}>a</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_2} text-8xl font-extrabold`}>k</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_3} text-8xl font-extrabold`}>e</h1>
                    </div>
                    <div className="h-fit text-center flex overflow-hidden mr-10">
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_4} text-8xl font-extrabold`}>B</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_5} text-8xl font-extrabold`}>e</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_6} text-8xl font-extrabold`}>s</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_7} text-8xl font-extrabold`}>t</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_8} text-8xl font-extrabold`}>&nbsp;</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_9} text-8xl font-extrabold`}>I</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_10} text-8xl font-extrabold`}>d</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_11} text-8xl font-extrabold`}>e</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_12} text-8xl font-extrabold`}>a</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_13} text-8xl font-extrabold`}>s</h1>
                    </div>
                    <div className="h-fit text-center flex overflow-hidden justify-end">
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_14} text-8xl font-extrabold`}>H</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_15} text-8xl font-extrabold`}>a</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_16} text-8xl font-extrabold`}>p</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_17} text-8xl font-extrabold`}>p</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_18} text-8xl font-extrabold`}>e</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_19} text-8xl font-extrabold`}>n</h1>
                    </div>
                    <div className="h-fit text-center flex overflow-hidden ml-24">
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_20} text-8xl font-extrabold`}>F</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_21} text-8xl font-extrabold`}>a</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_22} text-8xl font-extrabold`}>s</h1>
                        <h1 className={`${styles.animate_slide_up} ${styles.delay_23} text-8xl font-extrabold`}>t</h1>
                    </div>
                </div>
                <div className="flex relative w-[35%] h-[70%] overflow-hidden">
                    {/* Imagem */}
                    <Image className={`${styles.animate_slide_down} ${styles.delay_24}`} objectFit="cover" src='/images/firstsection/01.png' alt="imagem 01" fill />
                </div>
                <div>
                    {/* Menu lateral direito */}
                </div>
            </div>
        </div>
    );
}

export default FirstSession;