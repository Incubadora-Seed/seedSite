import BackgroundAnimation from "./BackgroundAnimation";

export default function TextBackgroundAnimation() {
    return (
        <>
            <BackgroundAnimation />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-14xl font-bold text-center">
                <span>Venha incubar sua empresa com a gente</span>
            </div>
        </>
    );
}
