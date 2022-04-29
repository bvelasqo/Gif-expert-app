import "@testing-library/jest-dom";
import {renderHook} from "@testing-library/react-hooks";
import {useFetchGifs} from "../../hooks/useFetchGifs";

describe("UseFetchGifs", () => {
	const category = "Dragon Ball";

	test("Should return the initial state", () => {
    //RENDER HOOK (see https://testing-library.com/docs/react-hooks-testing-library/api#renderhook)
    // render hook is a function that allows us to render a component and get the result of the render
		const {result} = renderHook(() => useFetchGifs(category));
		const {data, loading} = result.current;
		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test("Should return the data", async () => {
		const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
    // WAIT FOR THE NEXT UPDATE TO BE DONE BEFORE CONTINUING THE TEST (see https://testing-library.com/docs/react-hooks-testing-library#waitfornextupdate)
    await waitForNextUpdate();
		const {data, loading} = result.current;
		expect(data.length).toEqual(10);
		expect(loading).toBe(false);
	});
});
