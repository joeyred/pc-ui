export function breakpointArray(breakpoints) {
  const output = [];
  // eslint-disable-next-line
  for (let key in breakpoints) {
    if ({}.hasOwnProperty.call(breakpoints, key)) {
      output.push(key);
    }
  }
  return output;
}

/**
 * Returns the currently active breakpoint as a string. The value is the same as
 * the keys used in the breakpoints object.
 * @method activeBreakpoint
 * @return {String}         The name of the currently active breakpoint.
 */
export const activeBreakpoint = breakpoints => {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // let windowWidthInEms = pixelsToEms(windowWidth);
  // console.log(windowWidth, windowWidthInEms);

  let previousKey;
  let i = 0;
  // eslint-disable-next-line
  for (let key in breakpoints) {
    if ({}.hasOwnProperty.call(breakpoints, key)) {
      // This fixes the bug where the final breakpoint isn't honored.
      i += 1;
      // console.log(i);
      if (breakpointArray(breakpoints).length === i) {
        // console.log(key);
        return key;
      }
      if (windowWidth > breakpoints[key]) {
        // console.log('loop continued');
        previousKey = key;
      } else {
        return previousKey;
      }
    }
  }
  return previousKey;
};
