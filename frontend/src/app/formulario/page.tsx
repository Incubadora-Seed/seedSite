import Header from "@/components/Header";

export default function FormPage() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">
            Formulário de Contato
          </h1>
          <form
            action="https://formsubmit.co/sg-incubadora@ifsul.edu.br.com"
            method="POST"
            className="space-y-4"
          >
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
                className="input p-2"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Assunto"
                id="subject"
                required
                placeholder="Assunto"
                className="input p-2"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                name="Mensagem"
                id="message"
                required
                placeholder="Mensagem"
                className="input p-2"
              />
            </div>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/obrigado"
            />
            <button
              type="submit"
              className="text-white px-4 py-2 rounded button bg-purple-500 hover:bg-purple-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
