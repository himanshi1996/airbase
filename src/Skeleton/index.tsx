import { useLayoutEffect, useRef, useState } from 'react';
import "./style.scss";

interface SkeletonProps {
    baseColor?: string;
    highlightColor?: string;
    skeletonWidth?: number;
    skeletonHeight?: number;
}
export const Skeleton = (props: SkeletonProps) => {
    const { baseColor = '#ffffff', highlightColor = '#d3cdcdf6', skeletonWidth=0, skeletonHeight=0 } = props;
    const [height, setHeight] = useState<number|string>(skeletonWidth);
    const [width, setWidth] = useState<number|string>(skeletonHeight);

    const ref = useRef<any>();

    useLayoutEffect(() => {
        if (ref.current?.parentElement) {
            ref.current.parentElement.style.overflow = 'hidden'
        }
        if(ref.current?.parentElement?.offsetHeight){
            setHeight(ref.current?.parentElement?.offsetHeight);
        } else {
            setHeight(32);
        }
        if(ref.current?.parentElement?.offsetWidth){
            setWidth(ref.current?.parentElement?.offsetWidth);
        } else {
            setWidth('100%');
        }
    }, []);

    return (
        <div ref={ref} className="container-wrapper" style={{ height: height, width: width, backgroundColor: baseColor }} >
            <div className="container" style={{ backgroundColor: highlightColor }}>
            </div>
        </div>
    )
}
