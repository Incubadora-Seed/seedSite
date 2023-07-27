import BackgroundAnimation from "./BackgroundAnimation";

export default function TextBackgroundAnimation() {
    return (
        <>
            <BackgroundAnimation />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-10xl font-bold text-center">
                <h1 className="font-bold text-white">
                    Venha incubar sua empresa com a gente
                </h1>
            </div>
        </>
    );
}
