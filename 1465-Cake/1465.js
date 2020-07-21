var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    let max = 0
    horizontalCuts.unshift(0)
    horizontalCuts.push(h)
    verticalCuts.unshift(0)
    verticalCuts.push(w)
    horizontalCuts.sort((a,b) => a-b)
    verticalCuts.sort((a,b) => a-b)
    const horizontalBlocks = []
    const verticalBlocks = []
    const getMax = (array) => {
      let max = 0;
      for(let el of array) {
        max = el > max ? el : max
      }
      return max
    }
    for (let i = 0; i < horizontalCuts.length-1; i++) {
        let horizontal = horizontalCuts[i+1] - horizontalCuts[i] 
        horizontalBlocks.push(horizontal)
    }
    for (let j = 0; j < verticalCuts.length - 1; j++) {
        let vertical = verticalCuts[j+1] - verticalCuts[j]
        verticalBlocks.push(vertical)
    }
    return (getMax(horizontalBlocks) * getMax(verticalBlocks)) % (1e9 + 7)
};

console.log(maxArea(5,4,[3],[3]))