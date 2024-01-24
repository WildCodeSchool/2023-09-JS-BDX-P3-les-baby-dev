const currentProfilLoader = async (client) => {
  try {
    const data = await client.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/myprofil`
    );
    return { preloadUser: data ?? null };
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default currentProfilLoader;
