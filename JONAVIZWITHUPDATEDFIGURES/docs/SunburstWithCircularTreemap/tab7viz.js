// Renders Visualization and Legend for tab 7
class Tab7Viz{

    static Tab7VizRootName
    static Tab7VizData

    constructor(rootName, selectedOptions, structureData, classNames, selectedRemovals){
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab7Viz.Tab7VizRootName = rootName
        this.selectedRemovals = selectedRemovals
    }

    // renders legend for tab 7
    renderLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 410)

        svg.append("text")
            .attr("x", 0)
            .attr("y", 50)
            .attr("font-size", "58")
            .attr("fill", "Black")
            .text("Indicator Organisms Heatmap")

        svg.append("text")
            .attr("x", 612)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance Indicator Organism"))

        svg.append("rect")
            .attr("x", 622)
            .attr("y", 90)
            .attr("width", 400)
            .attr("height", 30)
            .attr("fill", "blue")
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 160)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("High Abundance Indicator Organism")

        svg.append("rect")
            .attr("x", 622)
            .attr("y", 130) 
            .attr("width", 400)
            .attr("height", 30) 
            .attr("fill", "red") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 200)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Non-Indicator Organism")

        svg.append("rect")
            .attr("x", 622)  
            .attr("y", 170)   
            .attr("width", 400) 
            .attr("height", 30) 
            .attr("fill", "white")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Go Up Hierarchy")


        svg.append("rect")
            .attr("x", 1342)    
            .attr("y", 85)    
            .attr("width", 40) 
            .attr("height", 40)
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1392)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1047)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Click on any node in graph to make that node root.")


        let renderVal = Tab7Viz.Tab7VizRootName.split('__')

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
    }

    // fills this tab's dropdown and after an element is selected from the dropdown, the visualization is rendered
    fillDropDown(){
        let diseaseNames = this.structureData[1].map(item => item.Name)
        const selectBox = document.getElementById('selectBox-T5');
        let val = document.getElementById('selectInput-T5').value
        if (val === ''){
            selectBox.innerHTML = ''; 
            let selectedValue = ''
            let that = this
            diseaseNames.forEach(option => {
                let div = document.createElement('div');
                div.textContent = option;
                div.addEventListener('click', function() {
                    document.getElementById('selectInput-T5').value = this.innerText;
                    selectedValue = this.innerText;
                    selectBox.style.display = 'none';
                    enableCheckboxes2()
                    removeVizDivs()
                    renderVizDivs(that.selectedOptions.length, 'tab7')
                    that.render(selectedValue)
                });
                selectBox.appendChild(div);
            });
        }
        else{
            removeVizDivs()
            renderVizDivs(this.selectedOptions.length,'tab7')
            this.render(val)
        }


        document.getElementById('selectInput-T5').addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let selectBox = document.getElementById('selectBox-T5');
            let options = selectBox.getElementsByTagName('div');
            
            for (let i = 0; i < options.length; i++) {
                let txtValue = options[i].textContent || options[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    options[i].style.display = "";
                } else {
                    options[i].style.display = "none";
                }
            }
        });

        document.getElementById('selectInput-T5').addEventListener('focus', function() {
            document.getElementById('selectBox-T5').style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            if (!event.target.matches('#selectInput-T5')) {
                document.getElementById('selectBox-T5').style.display = 'none';
            }
        });
    }

    // transforms data to be used later which will be used to color visualization later 
    transformObject(obj) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1){
                let value = obj[key]

                const firstCloseBracketIndex = value.indexOf(']')
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : null;
                if (number === null){
                    number = '620'
                }

                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;


                const transformedObj = {};
                transformedObj.organism = result; 
                transformedObj.ncbi_taxon_id = number; 
                transformedObj.weight = number2;
                transformedObjects.push(transformedObj);
            }
        });
        return transformedObjects;
    }

    // reasign assign based on removal of depths
    reassignChildren(root, w, x) {
        root.each(node => {
            if (node.depth === x && node.children) {
                node.children.forEach(child => {
                    let ancestor = node.parent;
                    while (ancestor && ancestor.depth !== w) {
                        ancestor = ancestor.parent;
                    }
                    if (ancestor) {
                        ancestor.children = ancestor.children || [];
                        ancestor.children.push(child);
                        child.parent = ancestor;
                    }
                });
                if (node.parent) {
                    node.parent.children = node.parent.children.filter(n => n !== node);
                }
            }
        });
    
        root.eachBefore(node => {
            if (node.depth === x) {
                if (node.parent) {
                    node.parent.children = node.parent.children.filter(n => n !== node);
                }
            }
        });
    
        root.eachBefore(node => {
            if (node.children && node.children.length === 0) {
                delete node.children;
            }
        });
    
        return root;
    }
    
    // adjust depths after depths are removed
    adjustDepths(root, removedDepth) {
        root.each(node => {
            if (node.depth > removedDepth) {
                node.depth -= 1;
            }
        });
        return root;
    }
    
    // assign value to each node 
    assignValues(node) {
        if (!node.children || node.children.length === 0) {
          node.value = 1; 
        } else {
          for (let child of node.children) {
            this.assignValues(child);
          }
        }
    }

    // handles mouseover event for the visualizations of this tab
    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData) {

        const hoveredPathId = "path-" + p.data.name + '-' + fileIndex
    
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 5);
            
        
        let myVar = p.data.name
        let myNames = myVar.split("__")
        let index = myVar.indexOf("_")
        let substringBeforeUnderscore = ''
        if (index !== -1) {
            substringBeforeUnderscore = nameMapping(myVar.substring(0, index));
        } 
    
        let lastIndex = nodeName.lastIndexOf('__')
        let firstIndex = nodeName.indexOf('__')
        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
        let taxonID = nodeName.substring(lastIndex + 2)

        let cdf = findTaxonCDFbyName(cdfContainerData, taxonName)
        if (cdf === null){
            cdf = '0%'
        }
        else{
            cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
        }
    
        let myVal = findNodeValueByName(cdfContainerData, taxonName)
        if (myVal === undefined){
            myVal = 0 + '%'
        }
        else{
            myVal = (myVal * 100).toFixed(6) + '%'
        }
    
    
        let mytext = 'Name : ' + myNames[1] + "<br>" +
            'Relative Abundance in this dataset : ' + myVal+ "<br>" + 
            'Percentile Value : ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    // handles mouseout event for the visualizations of this tab
    mouseout(event, p) {
        d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.style("stroke", element.attr("original-stroke"));
                element.style("stroke-width", element.attr("original-stroke-width"));
            });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }

    // renders the visualizations for this tab 
    render(diseaseName){
        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === diseaseName){
                myRow = csvData[row]
            }
        }

        let transformedData = this.transformObject(myRow);


        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]

            let svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 1150)
                    .attr("height", 1220)
                    .attr("viewBox", [0, 0, 1150, 1220])
                    .style("font", "30px sans-serif");
            
            let word = this.selectedOptions[i]

            svg.append("text")
                .attr("x", 0)
                .attr("y", 25)
                .attr("font-size", "34")
                .attr("fill", "black")
                .text(word)

            if (Tab7Viz.Tab7VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            data = findChildByName(data, Tab7Viz.Tab7VizRootName)

            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  that.assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
            }
              
            processData(data);
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let pack = d3.pack()
                .size([1150, 1150])
                .padding(3);

            let root = pack(hierarchy);

            let arr = this.selectedRemovals
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = this.reassignChildren(root, w, x); 
                root = this.adjustDepths(root, x);
                root = pack(root);
            }    
            
            svg.selectAll("circle")
                .data(root.descendants().slice(0))
                .join("circle")
                .classed("sunburst-path", true)
                .attr("id", (d) => "path-" + d.data.name + "-" + (i+2))
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", function(d){
                    return d.r
                })
                .attr("fill", function(d){
                    if (d.depth === 0){
                        return "white"
                    }
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                    
                    if (myWeight === null){
                        return "white"
                    }
                    else{
                        if (myWeight > 0){
                            return "red"
                        }
                        else{
                            return "blue"
                        }
                    }
                })
                .style("stroke", function(d){
                    
                    
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)

                    if (myWeight === null){
                        return "grey"
                    }
                    else{
                        return "black"
                    }
                })
                .style("opacity", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)

                    if (myWeight === null){
                        return "0.1"
                    }
                    else{
                        return "1"
                    }
                }) 
                .style("stroke-width", function(d){
                    if (d.depth === 0){
                        return "5"
                    }
                    return "1"
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[i+2])
                })
                .on("mouseout", that.mouseout)
                .on("click", function(event, p){
                    let found = 0
                    let myArr = p.children
                    for (let i = 0; i < myArr.length; i++) {
                        if (myArr[i].hasOwnProperty('children')) {
                            found = 1
                            break
                        }
                    } 
                    if (found = 1){
                        Tab7Viz.Tab7VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab7')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render(diseaseName)
                    }
                })


                d3.selectAll(".sunburst-path").each(function(d, i) {
                    var element = d3.select(this);
                    element.attr("original-stroke", element.style("stroke"));
                    element.attr("original-stroke-width", element.style("stroke-width"));
                });
            
                svg.append("rect")
                .attr("x", 0) 
                .attr("y", 40)
                .attr("width", 90)  
                .attr("height", 90)
                .attr("fill", "black") 
                .on("click", function(event, p){
                    if (Tab7Viz.Tab7VizRootName !== undefined){
                        if (Tab7Viz.Tab7VizRootName === 'sk__Bacteria__2'){
                            that.selectedRemovals = []
                            enableCheckboxes2()
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab7')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render(diseaseName)
                        }
                        else{
                            let parent = findParentByName(Tab7Viz.Tab7VizData[0], Tab7Viz.Tab7VizRootName);
                            Tab7Viz.Tab7VizRootName = parent.name
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab7')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render(diseaseName)
                        } 
                    }
                })
                .append("title")
                .text(function(){
                    if (Tab7Viz.Tab7VizRootName === undefined){
                        return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                    }
                    else{
                        let myNames = Tab7Viz.Tab7VizRootName.split('__')
                        return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                    }
                })
        }
    }
}