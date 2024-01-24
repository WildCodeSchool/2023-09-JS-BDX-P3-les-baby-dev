import { useParams } from "react-router-dom";

const { id } = useParams;

const globalAppLoader = async (apiService) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      apiService.setToken(token);

      const [currentProfil, nurseryData, currentStructure] = await Promise.all([
        apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/myprofil`
        ),
        apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/structure/${id}`
        ),
        apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/structure`
        ),
      ]);

      return {
        preloadUser: currentProfil ?? null,
        artistCollection: nurseryData.data,
        artCollection: currentStructure.data,
      };
    }

    // const [artistData, artData] = await Promise.all([
    //   apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artist`),
    //   apiService.get(`${import.meta.env.VITE_BACKEND_URL}/artwork`),
    // ]);
    // return {
    //   artistCollection: artistData.data,
    //   artCollection: artData.data,
    // };
  } catch (err) {
    console.error("Loader Error:", err.message);
    console.error("Loader Error Stack:", err.stack);
    return null;
  }
  return null;
};

export default globalAppLoader;
