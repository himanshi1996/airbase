import { useLayoutEffect, useRef, useState } from 'react';
import "./style.scss";

interface SkeletonProps {
    baseColor?: string;
    highlightColor?: string;
    skeletonWidth?: number;
    skeletonHeight?: number;
}
export const Skeleton = (props: SkeletonProps) => {
    const { baseColor = '#ffffff', highlightColor = '#eeeeeef6', skeletonWidth = 0, skeletonHeight = 0 } = props;
    const [height, setHeight] = useState(skeletonHeight);
    const [width, setWidth] = useState(skeletonWidth);

    const ref = useRef<any>();

    useLayoutEffect(() => {
        if (ref.current?.parentElement) {
            ref.current.parentElement.style.position = 'relative';
            ref.current.parentElement.style.overflow = 'hidden'
        }
        if(!skeletonHeight)
        setHeight(ref.current?.parentElement?.offsetHeight);
        if(!skeletonWidth)
        setWidth(ref.current?.parentElement?.offsetWidth);
    }, []);

    return (
        <div ref={ref} className="container-wrapper" style={{ height: height, width: width, backgroundColor: baseColor }} >
            <div className="container" style={{ backgroundColor: highlightColor }}>
            </div>
        </div>
    )
}
