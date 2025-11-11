import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BlobProps {
    numPoints?: number;
    centerX?: number;
    centerY?: number;
    minRadius?: number;
    maxRadius?: number;
    minDuration?: number;
    maxDuration?: number;
    fill?: string;
    width?: number;
    height?: number;
}

const Blob: React.FC<BlobProps> = ({
                                       numPoints = 8,
                                       centerX = 250,
                                       centerY = 250,
                                       minRadius = 200,
                                       maxRadius = 230,
                                       minDuration = 1,
                                       maxDuration = 2,
                                       fill = "#ffcc00",
                                       width = 500,
                                       height = 500,
                                   }) => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        if (!pathRef.current) return;

        const options = {
            element: pathRef.current,
            numPoints,
            centerX,
            centerY,
            minRadius,
            maxRadius,
            minDuration,
            maxDuration,
        };

        const blob = createBlob(options);

        gsap.to(blob.tl, {
            duration: 0.3,
            timeScale: 1,
            onStart: () => blob.tl.play(),
        });
    }, [
        numPoints,
        centerX,
        centerY,
        minRadius,
        maxRadius,
        minDuration,
        maxDuration,
    ]);

    return (
        <svg width={width} height={height}>
            <path ref={pathRef} fill={fill} />
        </svg>
    );
};

export default Blob;

/* --------------------------
   Blob Helper Functions
-------------------------- */
function createBlob(options: any) {
    const points: { x: number; y: number }[] = [];
    const path: SVGPathElement = options.element;
    const slice = (Math.PI * 2) / options.numPoints;
    const startAngle = random(Math.PI * 2);

    const tl = gsap.timeline({
        onUpdate: update,
        paused: true,
    });

    for (let i = 0; i < options.numPoints; i++) {
        const angle = startAngle + i * slice;
        const duration = random(options.minDuration, options.maxDuration);

        const point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius,
        };

        const tween = gsap.to(point, {
            duration: duration,
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        tl.add(tween, -random(duration));
        points.push(point);
    }

    options.tl = tl;
    options.points = points;

    tl.progress(1).progress(0).timeScale(0);
    update();

    function update() {
        path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
}

function cardinal(data: { x: number; y: number }[], closed: boolean, tension = 1) {
    if (data.length < 1) return "M0 0";

    let size = data.length - (closed ? 0 : 1);
    let path = `M${data[0].x} ${data[0].y} C`;

    for (let i = 0; i < size; i++) {
        let p0, p1, p2, p3;

        if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];
        } else {
            p0 = i === 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i === size - 1 ? p2 : data[i + 2];
        }

        const x1 = p1.x + ((p2.x - p0.x) / 6) * tension;
        const y1 = p1.y + ((p2.y - p0.y) / 6) * tension;
        const x2 = p2.x - ((p3.x - p1.x) / 6) * tension;
        const y2 = p2.y - ((p3.y - p1.y) / 6) * tension;

        path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`;
    }

    return closed ? path + "z" : path;
}

function random(min: number, max?: number) {
    if (max == null) {
        max = min;
        min = 0;
    }
    if (min > max) [min, max] = [max, min];
    return min + (max - min) * Math.random();
}
