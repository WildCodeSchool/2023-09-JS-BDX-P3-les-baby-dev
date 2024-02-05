/* import { useLoaderData } from "react-router-dom";

const currentResaParentLoader = async (apiService) => {
  const loaderDataResaParent = useLoaderData();
  const myProfil = loaderDataResaParent?.parentProfil;
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/reservations/parent/${
        myProfil.id
      }`
    );

    loaderDataResaParent.parentResa = response?.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }

  return loaderDataResaParent;
};

export default currentResaParentLoader; */
