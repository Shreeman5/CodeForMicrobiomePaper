
// assign disease indicator numbers to every node in the sunburst
function calculateLeafDescendantsAndNames(node, namesArray, namesArray2, namesArray3, namesArray4) {
    if (!node.children || node.children.length === 0) {
        node.totalLeafDescendants = 1; // Leaf node has 1 leaf descendant (itself)

        let myVal = node.data.name
        let myNames = myVal.split('__')
        // console.log(myNames)
        node.nameFound = namesArray.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        // node.positiveInd = namesArray2.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        // node.negativeInd = namesArray3.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        node.nameFoundTotal = (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0
    } 
    else {
        node.totalLeafDescendants = node.children.reduce(function(sum, child) {
            return sum + calculateLeafDescendantsAndNames(child, namesArray, namesArray2, namesArray3, namesArray4);
        }, 0);

        let myVal = node.data.name
        let myNames = myVal.split('__')
        node.nameFound = node.children.reduce(function(sum, child) {
            return sum + child.nameFound;
        }, namesArray.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        // node.positiveInd = node.children.reduce(function(sum, child) {
        //     return sum + child.positiveInd;
        // }, namesArray2.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        // node.negativeInd = node.children.reduce(function(sum, child) {
        //     return sum + child.negativeInd;
        // }, namesArray3.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        node.nameFoundTotal = node.children.reduce(function(sum, child) {
            return sum + child.nameFoundTotal;
        }, (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0);
    }
    return node.totalLeafDescendants;
}

// find node at depth 1 with max disease indicator number
function findMaxValueNodeAtDepth1(root, key) {
    let maxValueNode = null;
    let maxValue = -Infinity;
  
    root.each(node => {
      if (node.depth === 1 && node[key] > maxValue) {
        maxValueNode = node;
        maxValue = node[key];
      }
    });
  
    return maxValueNode.data.name;
}

// sort nodes at each depth based on disease indicator number
function sortHierarchy(node, maxNodeName) {
    if (node.children) {               
        node.children.sort((a, b) => b.nameFoundTotal - a.nameFoundTotal);
        node.children.forEach(child => sortHierarchy(child, maxNodeName));
    }
}

// arc construction for sunburst
function createArc(maxDepth){
    return d3.arc()
            .startAngle(function(d) { 
                return d.x0; 
            })
            .endAngle(function(d) { 
                return d.x1; 
            })
            .innerRadius(function(d) { 
                let val = innerRadius(d, maxDepth);
                return val; 
            })
            .outerRadius(function(d) { 
                let val = outerRadius(d, maxDepth);
                return val; 
            });
}

// inner Radius at each depth
function innerRadius(d, maxDepth){
    if (maxDepth === 6){
        if (d.depth === 6){
            return 459
        }
        if (d.depth === 5){
            return 388
        }
        if (d.depth === 4){
            return 317
        }
        if (d.depth === 3){
            return 246
        }
        if (d.depth === 2){
            return 175
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 5){
        if (d.depth === 5){
            return 447
        }
        if (d.depth === 4){
            return 364
        }
        if (d.depth === 3){
            return 281
        }
        if (d.depth === 2){
            return 198
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 4){
        if (d.depth === 4){
            return 430
        }
        if (d.depth === 3){
            return 330
        }
        if (d.depth === 2){
            return 230
        }
        if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 3){
        if (d.depth === 3){
            return 405
        }
        if (d.depth === 2){
            return 280
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 2){
        if (d.depth === 2){
            return 365
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 1){
        if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 0){
        return 0
    }
}

// outer radius at each depth
function outerRadius(d, maxDepth){
    if (maxDepth === 6){
        if (d.depth === 6){
            return 530
        }
        if (d.depth === 5){
            return 459
        }
        if (d.depth === 4){
            return 388 
        }
        if (d.depth === 3){
            return 317
        }
        if (d.depth === 2){
            return 246 
        }
        else if (d.depth === 1){
            return 175 
        }
    }
    if (maxDepth === 5){
        if (d.depth === 5){
            return 530 
        }
        if (d.depth === 4){
            return 447 
        }
        if (d.depth === 3){
            return 364
        }
        if (d.depth === 2){
            return 281
        }
        else if (d.depth === 1){
            return 198 
        }
    }
    if (maxDepth === 4){
        if (d.depth === 4){
            return 530
        }
        if (d.depth === 3){
            return 430 
        }
        if (d.depth === 2){
            return 330 
        }
        if (d.depth === 1){
            return 230 
        }
    }
    if (maxDepth === 3){
        if (d.depth === 3){
            return 530 
        }
        if (d.depth === 2){
            return 405 
        }
        else if (d.depth === 1){
            return 280
        }
    }
    if (maxDepth === 2){
        if (d.depth === 2){
            return 530 
        }
        else if (d.depth === 1){
            return 365 
        }
    }
    if (maxDepth === 1){
        if (d.depth === 1){
            return 530
        }
    }
    if (maxDepth === 0){
        return 0
    }
}

// disable but check checkboxes
function disableCheckboxes(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("checked", true)
    checkbox1.property("disabled", true)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("checked", true)
    checkbox2.property("disabled", true)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("checked", true)
    checkbox3.property("disabled", true)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("checked", true)
    checkbox4.property("disabled", true)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("checked", true)
    checkbox5.property("disabled", true)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("checked", true)
    checkbox6.property("disabled", true)
}

//enable checkboxes
function enableCheckboxes(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("disabled", false)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("disabled", false)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("disabled", false)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("disabled", false)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("disabled", false)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("disabled", false)
}

// check checkboxes
function enableCheckboxes2(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("checked", true)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("checked", true)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("checked", true)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("checked", true)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("checked", true)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("checked", true)
}

// find max depth of data
function findMaxDepth(node) {
    if (!node || !node.children || node.children.length === 0) {
      return 1; 
    }
  
    const childDepths = node.children.map(findMaxDepth);
    return Math.max(...childDepths) + 1;
  }
