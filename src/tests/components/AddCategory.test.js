import {shallow} from "enzyme";
import "@testing-library/jest-dom"
import {AddCategory} from "../../components/AddCategory";
describe("AddCategory", () => {

	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();

  });

	test("Should to change the input value", () => {
		let input = wrapper.find("input");
		const value = "Dragon Ball";
    // simulate() is a method from enzyme that allows us to simulate an event (see https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)
    // change is an event that we can simulate (see https://reactjs.org/docs/events.html)
    // target is a property that we can use to get the value of the input (see https://reactjs.org/docs/events.html#event-pooling)
		input.simulate("change", {target: {value}});
		input = wrapper.find("input");
		expect(input.prop("value")).toBe(value);
	});


  test("Should not call setCategories when form is submitted and input is empty", () => {
    const form = wrapper.find("form");
    form.simulate("submit", {preventDefault() {}});
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Should call setCategories when form is submitted and input is not empty", () => {
    const value = "Dragon Ball";
    wrapper.find("input").simulate("change", {target: {value}});
    const form = wrapper.find("form");
    form.simulate("submit", {preventDefault() {}});
    const input = wrapper.find("input");
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop("value")).toBe("");
  });
});
