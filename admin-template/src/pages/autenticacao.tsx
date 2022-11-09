import React from "react";
import AuthInput from "../components/auth/AuthInput";
import {
  IconeAtencao,
  IconeCadastro,
  IconeEntrar,
  IconeGoogle,
} from "../components/Icons/Index";
import useAuth from "../../data/hook/useAuth";

const Autenticacao = () => {
  const { cadastrar, loginGoogle, login } = useAuth();

  const [erro, setErro] = React.useState(null);
  const [modo, setModo] = React.useState<"login" | "cadastro">("login");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  async function submeter() {
    try {
      if (modo === "login") {
        await login(email, senha);
      } else {
        await cadastrar(email, senha);
      }
    } catch (e) {
      exibirErro(e?.message ?? "Erro inesperado");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 bg-indigo-600 bg-opacity-40">
        <img
          className="h-screen w-full object-cover mix-blend-luminosity "
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticacao"
        />
      </div>
      <div className="m-10 w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">
          {modo === "login"
            ? "Entre com sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        {erro && (
          <div className="flex gap-2 items-center bg-red-400 text-white font-bold py-3 px-5 my-2 border border-red-700 rounded-lg">
            <IconeAtencao />
            <span>{erro}</span>
          </div>
        )}

        <AuthInput
          tipo="email"
          label="Email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          tipo="password"
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          className="flex items-center justify-center gap-3 flex-row-reverse w-full h-14 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg mt-6 font-bold"
          onClick={submeter}
        >
          {modo === "login" ? (
            <>
              Entrar <IconeEntrar />
            </>
          ) : (
            <>
              Cadastrar <IconeCadastro />
            </>
          )}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          className="flex items-center justify-center gap-3 flex-row-reverse w-full h-14 bg-red-500 hover:bg-red-400 text-white rounded-lg font-bold"
          onClick={loginGoogle}
        >
          {modo === "login" ? (
            <>
              Entrar com google <IconeGoogle />
            </>
          ) : (
            <>
              Cadastrar com Google Email <IconeGoogle />
            </>
          )}
        </button>

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Ja faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Entre com suas credenciasis
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Autenticacao;
