//json --Array of Objects,objects of objects

// var arr=[
//     {
//         name:"Asha",
//         age:20
//     },
//     {
//         name:"Asha",
//         age:10
//    },
//     {
//         name:"Asha",
//         age:10
                
//     }
// ];
// var sum=0
// for(var obj of arr){
//     sum=sum+obj.age
// }
// console.log(sum)

var obj={"menu": {
    "header": "SVG Viewer",
    "items": [
        {"id": "Open"},
        {"id": "OpenNew", "label": "Open New"},
        null,
        {"id": "ZoomIn", "label": "Zoom In"},
        {"id": "ZoomOut", "label": "Zoom Out"},
        {"id": "OriginalView", "label": "Original View"},
        null,
        {"id": "Quality"},
        {"id": "Pause"},
        {"id": "Mute"},
        null,
        {"id": "Find", "label": "Find..."},
        {"id": "FindAgain", "label": "Find Again"},
        {"id": "Copy"},
        {"id": "CopyAgain", "label": "Copy Again"},
        {"id": "CopySVG", "label": "Copy SVG"},
        {"id": "ViewSVG", "label": "View SVG"},
        {"id": "ViewSource", "label": "View Source"},
        {"id": "SaveAs", "label": "Save As"},
        null,
        {"id": "Help"},
        {"id": "About", "label": "About Adobe CVG Viewer..."}
    ]
}}
console.log(obj.menu.header)
for(var i=0;i<obj.menu.length;i++){
   
}
// for(var i=0;i< obj.menu.items.length;i++){
//     if(obj.menu.items[i] !==null && obj.menu.items[i].label !==null){
//         console.log(obj.menu.items[i].id)
//     }
   
    
//}