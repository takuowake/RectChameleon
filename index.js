const canvas = new fabric.Canvas('canvas', {
    width: 1400,
    height: 700,
    backgroundColor: 'rgb(231, 228, 228)'
});

const createRect = (canvas) => {
    console.log("rect")
    const rect = new fabric.Rect({
        width: 200,
        height: 100,
        fill: 'gray',
        left: 0,
        top: 0
    })
    canvas.add(rect)
    canvas.renderAll()
}
