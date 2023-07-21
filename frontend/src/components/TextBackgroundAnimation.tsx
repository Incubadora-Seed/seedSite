import BackgroundAnimation from "./BackgroundAnimation";

export default function TextBackgroundAnimation() {
    return (
        <>
            <BackgroundAnimation />
            <div className="flex ml-[10vh] relative z-2 w-[30vw]">
                <h1 className="text-6xl font-bold text-black">
                    Venha incubar sua empresa com a gente
                </h1>
            </div>
        </>
    );
}
