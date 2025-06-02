// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
// REMOVA: import { useRouter } from "expo-router"; // Não precisamos mais do useRouter aqui
import { saveToken, getToken, removeToken } from "../utils/storage";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  signIn: (username: string, password: string) => Promise<boolean>; // Altere para retornar boolean
  signOut: () => Promise<void>; // Assíncrono
  initialized: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await getToken();
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Failed to load token from storage:", error);
        // Opcional: Tratar erro, talvez limpar estado ou notificar o usuário
      } finally {
        setInitialized(true); // Sempre marque como inicializado, mesmo que falhe
      }
    };

    loadToken();
  }, []);

  // Altere a função signIn para retornar um booleano (sucesso ou falha)
  async function signIn(username: string, password: string): Promise<boolean> {
    // Simulação de autenticação (sua lógica real de API aqui)
    if (username === "admin" && password === "123") {
      const newToken = "fake-token-123";
      await saveToken(newToken);
      setToken(newToken);
      return true; // Autenticação bem-sucedida
    } else {
      //alert("Usuário ou senha inválidos.");
      return false; // Autenticação falhou
    }
  }

  async function signOut(): Promise<void> {
    await removeToken();
    setToken(null);
    
  }

  return (
    <AuthContext.Provider value={{ token, setToken, signIn, signOut, initialized }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}