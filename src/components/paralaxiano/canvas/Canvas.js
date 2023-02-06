import React, {useEffect, useRef, useState} from "react";
import layer1 from "../clouds.png";
import layer2 from "../mountains.png";
import layer3 from "../mountains2.png";
import layer4 from "../mountains3.png";
import layer5 from "../trees.png";
import layer6 from "../tower.png";
import layer7 from "../trees2.png";
import {Parallax} from "react-parallax";
import {ParallaxLayer} from "@react-spring/parallax";
import "./Canvas.css";

const Canvas = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    const ref=useRef();

    const styles = {
        layer1: {
            backgroundImage: `url(${layer1})`,
            backgroundPosition: 'center 90%',
        },
        layer2: {
            backgroundImage: `url(${layer2})`,
            backgroundPosition: 'center 70%',
        },
        layer3: {
            backgroundImage: `url(${layer3})`,
            backgroundPosition: 'center 40%',
        },
        layer4: {
            backgroundImage: `url(${layer4})`,
            backgroundPosition: 'center 50%',
        },
        layer5: {
            backgroundImage: `url(${layer5})`,
            backgroundPosition: 'center 70%',
        },
        layer6: {
            backgroundImage: `url(${layer6})`,
            backgroundPosition: "center 0%",
        },
        layer7: {
            backgroundImage: `url(${layer7})`,
            backgroundPosition: "center 0%",
        }

    };


    return (
        <Parallax ref={ref} config={{tension:10000,clamp:true}} pages={2} className="parallax" style={{backgroundColor:"#000723",scrollBehavior:"smooth"}}>
            <ParallaxLayer speed={-0.35} offset={0.1} style={styles.layer1}>
            </ParallaxLayer>
            <ParallaxLayer speed={-0.25} offset={0.23} style={styles.layer2}>
            </ParallaxLayer>
            <ParallaxLayer speed={-0.2} offset={0.25} style={styles.layer3}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0.25} style={styles.layer4}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.15} offset={0.25} style={styles.layer5}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.5} offset={0.6} style={styles.layer6}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.5} offset={0.6} style={styles.layer7}>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Canvas;