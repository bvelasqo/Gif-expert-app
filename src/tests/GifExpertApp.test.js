import Shallow from "enzyme/Shallow";
import {GifExpertApp} from "../GifExpertApp";

describe("GifExpertApp", () => {
  let categories = ["Dragon Ball", "Naruto"];
	let wrapper = Shallow(<GifExpertApp />);
	beforeEach(() => {
    categories = ["Dragon Ball", "Naruto"];
		wrapper = Shallow(<GifExpertApp defaultCategories={categories} />);
	});

	test("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

  test("Should to show a list of categories", () => {
		expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
