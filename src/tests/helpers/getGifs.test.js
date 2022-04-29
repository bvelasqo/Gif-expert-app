import { getGifs } from "../../helpers/getGifs";

describe("getGifs", () => {
  let category = "";
  let gifs = [];

  test("should return 10 gifs", async () => {
    category = "Dog";
    gifs = await getGifs(category);
    expect(gifs.length).toBe(10);
  });

  test("should return 0 gifs", async () => {
    category = "";
    gifs = await getGifs(category);
    expect(gifs.length).toBe(0);
  });

});