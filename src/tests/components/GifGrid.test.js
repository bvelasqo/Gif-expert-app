import "@testing-library/jest-dom";
import shallow from "enzyme/shallow";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("GifGrid", () => {
	const category = "Dragon Ball";
  let gifs;
  let wrapper;
	beforeEach(() => {
		jest.clearAllMocks();
		const gifs = [
			{
				id: "ABC",
				url: "https://localhost/cualquiercosa.jpg",
				title: "Cualquier cosa",
			},
		];
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
	});
	test("should render correctly", () => {
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Should to show items when useFetchGifs is called", () => {
		const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("GridItem").exists()).toBe(false);
	});

  test("Should to show loading when useFetchGifs is called", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("#loading").exists()).toBe(true);
  });
});
