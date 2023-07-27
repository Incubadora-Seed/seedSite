import Image from 'next/image';

export default function LoginPage() {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center ">
            <Image
                width={300}
                height={100}
                alt="logo"
                src="/logo-roxa.png"
            />
            <h1 className="text-2xl mb-[5vh]">
                Log In
            </h1>
            <section>
                <form action="" method="get" className="">
                    <label
                        htmlFor=""
                        className="flex flex-col text-lg">
                        Email
                    </label>
                    <input
                        type="text" name="email-field" id=""
                        className="bg-gray-300 flex flex-col w-full px-2 py-2 text-xl" />
                    <label
                        htmlFor=""
                        className="flex flex-col pt-4 text-lg">
                        Password
                    </label>
                    <input type="password" name="password-field" id="password-field"
                        className="bg-gray-300 flex flex-col w-full px-2 py-2 text-xl" />
                    <input type="checkbox" name="isChecked" id="isChecked" value="true" className="rounded border-gray-400 bg-gray-700 text-purple-500" />
                    Manter Conectado
                </form>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
                </div>
            </section>
        </div>
    );
}
