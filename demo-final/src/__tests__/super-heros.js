import { getFlyingSuperHeros } from "../super-heros";

test('manual "snapshot"', () => {
  const flyingHeros = getFlyingSuperHeros();
  expect(flyingHeros).toEqual([
    { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
    { name: "Apogee", powers: ["gravity control", "fly"] }
  ]);
});

test("automatic snapshot", () => {
  const flyingHeros = getFlyingSuperHeros();
  expect(flyingHeros).toMatchSnapshot();
});

test("inline snapshot", () => {
  const flyingHeros = getFlyingSuperHeros();
  expect(flyingHeros).toMatchInlineSnapshot(`
Array [
  Object {
    "name": "Dynaguy",
    "powers": Array [
      "disintegration ray",
      "fly",
    ],
  },
  Object {
    "name": "Apogee",
    "powers": Array [
      "gravity control",
      "fly",
    ],
  },
]
`);
});
