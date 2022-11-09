import { createContext, useState,useEffect } from "react";


interface AppContextPrps {
  tema?: string;
  alternarTema?: () => void
}

const AppContext = createContext<AppContextPrps>({
     tema: null ,
     alternarTema: null
    });

export function AppProvider(props) {
    const [tema, setTema] = useState('dark')

    function alternarTema(){
      const novoTema = tema === '' ? 'dark' : ''
       setTema(novoTema);
       localStorage.setItem('tema', novoTema)
    }

   useEffect(()=>{
    const temaSalvo = localStorage.getItem('tema');
    setTema(temaSalvo)
    },[])

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
