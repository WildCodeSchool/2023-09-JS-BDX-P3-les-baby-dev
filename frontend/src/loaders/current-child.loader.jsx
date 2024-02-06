const currentChildProfilLoader = async (apiService, id) => {
  const loaderData = {
    childProfil: null,
  };

  try {
    const childProfilResponse = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/parent/children/${id}",`
    );

    loaderData.childProfil = childProfilResponse.data;

    return loaderData;
  } catch (error) {
    return null;
  }
};

export default currentChildProfilLoader;
