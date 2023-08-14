import Header from "@/components/Header";

export default function FormPage() {
    return (
        <>
            <Header />
            <section className="m-auto text-center">
                <h1 className="text-6xl mt-[20vh] font-bold">
                    Formulário de Contato
                </h1>
                <form action="" method="get" className="">
                    <label
                        htmlFor=""
                        className="flex flex-col text-lg">
                        E-mail
                    </label>
                    <input
                        type="text" name="email-field" id=""
                        className="bg-gray-300 flex flex-col w-full px-2 py-2 text-xl" required />
                    <input type="checkbox" name="isChecked" id="isChecked" value="true" className="rounded border-gray-400 bg-gray-700 text-purple-500" />
                        Enviar Mensagem Anônima
                    <label
                        htmlFor=""
                        className="flex flex-col pt-4 text-lg">
                        Assunto
                    </label>
                    <input type="text" name="subject-field" id="subject-field"
                        className="bg-gray-300 flex flex-col w-full px-2 py-2 text-xl" required />
                    <label
                        htmlFor=""
                        className="flex flex-col pt-4 text-lg">
                        Mensagem
                    </label>
                    <input type="text" name="message-field" id="message-field"
                        className="bg-gray-300 flex flex-col w-full px-2 py-2 text-xl" required />
                </form>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                </div>
            </section>
        </>
    )
}
