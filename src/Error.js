import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error("Routing Error:", error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! 😵</h1>
      <h2 className="text-2xl mb-2">Something went wrong</h2>
      <p className="text-lg text-gray-600">
        {error.status || 404} : {error.statusText || error.message || "Page Not Found"}
      </p>
    </div>
  );
};

export default Error;
