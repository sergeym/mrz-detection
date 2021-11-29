import Image from "image-js";

type MrzDetection = {
    getMrz: (image: Image, options: object) => Image | { images: any }
    readMrz: (image: Image, options: object) => Image | { images: any }
};

export default function (options: object): MrzDetection;

