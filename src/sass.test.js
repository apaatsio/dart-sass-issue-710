import dartSass from "dart-sass";
import nodeSass from "node-sass";

test("render SCSS file with dart-sass", () => {
  const scssFile =  "./src/styles.scss";
  const scssResult = dartSass.renderSync({ file: scssFile });
  expect(scssResult.css.toString()).toContain(".foo");
});

test("render SCSS file node-sass", () => {
  const scssFile =  "./src/styles.scss";
  const scssResult = nodeSass.renderSync({ file: scssFile });
  expect(scssResult.css.toString()).toContain(".foo");
});
