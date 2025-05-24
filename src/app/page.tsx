import { CircleAlert } from "lucide-react";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 mx-4 text-center">
      <div className="flex items-center space-x-3 mb-6">
        <CircleAlert className="size-10 text-orange-500 animate-bounce hidden sm:block" />
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow">
          Portfólio em Construção
        </h1>
      </div>
      <p className="text-gray-700 text-xl text-center max-w-md">
        🚧 Volte em breve para conferir o resultado. 🚧
      </p>
    </div>
  );
};

export default App;
