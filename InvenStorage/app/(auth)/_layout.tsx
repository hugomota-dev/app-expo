import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"; // Certifique-se de que o Ionicons esteja instalado

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d", // Cor do ícone/texto ativo da aba
        tabBarInactiveTintColor: "#a9a9a9", // Cor do ícone/texto inativo da aba
        headerStyle: {
          backgroundColor: "#25292e", // Cor de fundo do cabeçalho
        },
        headerShadowVisible: false, // Remove sombra do cabeçalho
        headerTintColor: "#fff", // Cor do texto/ícones no cabeçalho
        tabBarStyle: {
          backgroundColor: "#25292e", // Cor de fundo da barra de abas
          borderTopWidth: 0, // Remove a linha superior da barra de abas
          elevation: 0, // Remove sombra no Android
        },
        headerTitleStyle: {
            fontWeight: 'bold', // Estilo do título do cabeçalho
        }
      }}
    >
      {/* Tela Home (Menu Principal) */}
      <Tabs.Screen
        name="home" // Corresponde à pasta `app/(auth)/home/index.tsx`
        options={{
          title: "Home", // Título que aparece no cabeçalho
          tabBarLabel: "Home", // Título que aparece na aba
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Ícone de casa
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Tela Novo Cadastro */}
      <Tabs.Screen
        name="register" // Corresponde à pasta `app/(auth)/register/index.tsx`
        options={{
          title: "Novo Cadastro",
          tabBarLabel: "Cadastro",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"} // Ícone de adição
              color={color}
              size={32}
            />
          ),
        }}
      />

      {/* Tela Buscar Materiais */}
      <Tabs.Screen
        name="search" // Corresponde à pasta `app/(auth)/search/index.tsx`
        options={{
          title: "Buscar Materiais",
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"} // Ícone de busca
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Se você tiver outras telas no grupo (auth) que NÃO devem ter uma aba,
          você pode usar `href: null` ou criá-las como rotas aninhadas sem aba explícita.
          Por exemplo, se "Detalhes do Material" fosse uma rota em (auth)/search/[id].tsx,
          ela não precisaria de uma aba própria.
      */}
    </Tabs>
  );
}