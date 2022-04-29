import {GifGridItem} from "../../components/GifGridItem";
import Shallow from "enzyme/Shallow";

describe("GifGridItem", () => {
	const title = "Title";
	const url = "https://media1.giphy.com/media/l0HlW7QXQX5qQQq0U/200w.gif";
	const id = "l0HlW7QXQX5qQQq0U";

	let wrapper = Shallow(<GifGridItem id={id} title={title} url={url} />);

  // beforeEach is a hook that runs before each test is run (beforeEach is a function)
	beforeEach(() => {
    // Shallow render component before each test case to avoid re-rendering component each time test case is run (performance)
		wrapper = Shallow(<GifGridItem id={id} title={title} url={url} />);
	});

	test("should render correctly", () => {
    // toMatchSnapshot() is a method from jest-dom that allows us to test the component in a snapshot test format (see https://jestjs.io/docs/en/expect)
		expect(wrapper).toMatchSnapshot();
	});

	test("Should to have a <p> tag with the title", () => {
    // find() is a method from enzyme that allows us to find a specific element in the component
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe(title);
	});

	test("Should to have a <img> tag with the url and alt", () => {
		const img = wrapper.find("img");
    // prop is a method from enzyme that allows us to test the component in a snapshot test format (see https://jestjs.io/docs/en/expect)
		expect(img.prop("src")).toBe(url);
    // toBe() is a method from jest-dom that allows us to test the component in a snapshot test format (see https://jestjs.io/docs/en/expect)
		expect(img.prop("alt").trim()).toBe(title);
	});

  test("Should to have animate__animated animate__zoomIn class", () => {
    // find() is a method from enzyme that allows us to find a specific element in the component
    const img = wrapper.find("img");
    //hasClass() is a method from enzyme that allows us to test the component in a snapshot test format (see https://jestjs.io/docs/en/expect)
    expect(img.hasClass("animate__animated animate__zoomIn")).toBe(true);
  });

  test("Shoul be a <div> tag", () => {
    // find() is a method from enzyme that allows us to find a specific element in the component
    const div = wrapper.find("div");
    // toBe() is a method from jest-dom that allows us to test the component in a snapshot test format (see https://jestjs.io/docs/en/expect)
    expect(div.length).toBe(1);
  });
});
