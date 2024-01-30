const currentStructureProfil = async (apiService) => {
  try {
    const data = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/structure`
    );
    return { preloadUserStructure: data ?? null };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default currentStructureProfil;
