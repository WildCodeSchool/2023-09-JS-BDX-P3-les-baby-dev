const structuresLoader = async (apiService) => {
  const loaderData = { structures: [] };
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/structure`
    );
    loaderData.structures = response.data;
  } catch (error) {
    console.error(error.message);
  }

  return loaderData;
};

export default structuresLoader;
