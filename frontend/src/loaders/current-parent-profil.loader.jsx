const currentParentProfilLoader = async (apiService) => {
  const loaderData = {
    parentProfil: null,
  };

  try {
    const parentProfilResponse = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/parent/myprofil`
    );

    loaderData.parentProfil = parentProfilResponse.data;

    return loaderData;
  } catch (error) {
    return loaderData;
  }
};

export default currentParentProfilLoader;
