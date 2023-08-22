import BackgroundAnimation from "./BackgroundAnimation";

export default function TextBackgroundAnimation() {
    return (
        <>
            <BackgroundAnimation />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl sm:text-7xl md:text-9xl lg:text-11xl xl:text-13xl font-bold text-center">
                <span>Venha incubar sua empresa com a gente</span>
            </div>
        </>
    );
}
