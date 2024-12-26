import axios from "axios";

const URL = "http://localhost:3000";

export const getProducts = async (page = 1) => {
  try {
    const response = await axios.get(`${URL}/users/pagination?page=${page}`);
    return {
      data: response.data.data,
      totalPages: response.data.totalPage,
      currentPage: response.data.page
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

