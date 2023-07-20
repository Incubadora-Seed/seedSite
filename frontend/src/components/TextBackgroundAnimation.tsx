import BackgroundAnimation from "./BackgroundAnimation";

export default function TextBackgroundAnimation() {
    return (
        <>
            <div className="relative z-10">
                <BackgroundAnimation />
                <div className="flex ml-[10vh] relative z-2">
                    <h1 className="text-6xl font-bold text-white">
                        Venha incubar sua empresa com a gente
                    </h1>
                </div>
            </div>
        </>
    );
}
