const currentStructureHours = async (apiService) => {
  try {
    const data = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/myhours`
    );
    return { preloadUserStructureHours: data ?? null };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default currentStructureHours;
