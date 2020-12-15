import axios from "axios";
const apiURL = "https://api.chucknorris.io/jokes/categories";

export const fetchCategories = async () => {
  const { data } = await axios.get(apiURL);
 console.log(data)
  return data;
};

	
/*const getRandomCategoryJoke = (category) =>_{
  request.get(`${baseURl}random?category=${category}`);
}

const getJokesCategories = () => {
	request.get(`${baseURl}categories`);
}*/