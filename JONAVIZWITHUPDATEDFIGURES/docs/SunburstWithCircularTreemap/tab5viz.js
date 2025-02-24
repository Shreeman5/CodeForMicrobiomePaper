// Renders Visualization and Legend for tab 5
class Tab5Viz{

    static Tab5VizRootName
    static Tab5VizData

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab5Viz.Tab5VizRootName = rootName
        this.selectedRemovals = selectedRemovals
    }

    // renders legend for tab 5
    renderLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 410)

        svg.append("text")
            .attr("x", 0)
            .attr("y", 50)
            .attr("font-size", "58")
            .attr("fill", "Black")
            .text("Aggregate Heatmap(Combining All Samples)")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance of Organism"))

        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#0200b9")
            .attr("stop-opacity", 1);

        gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#00fff3")
                .attr("stop-opacity", 1);

        svg.append("rect")
            .attr("x", 552)
            .attr("y", 90)
            .attr("width", 400) 
            .attr("height", 30)
            .attr("fill", "url(#gradient)")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
        .attr("x", 552)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("0")

        svg.append("text")
        .attr("x", 952)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .attr("text-anchor", "end")
        .text((this.sliderMin).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 190)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Normal Abundance of Organism"))

        svg.append("rect")
            .attr("x", 552)
            .attr("y", 160)
            .attr("width", 400)
            .attr("height", 30) 
            .attr("fill", "purple")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMin).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text((this.sliderMax).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 260)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("High Abundance of Organism"))

        const gradient2 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient2.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#ff0000")
            .attr("stop-opacity", 1);

        gradient2.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#7b0000")
                .attr("stop-opacity", 1);

        svg.append("rect")
            .attr("x", 552)
            .attr("y", 230)
            .attr("width", 400)
            .attr("height", 30)
            .attr("fill", "url(#gradient2)")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMax).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 330)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Organism Absent"))

        svg.append("rect")
            .attr("x", 552)
            .attr("y", 300)
            .attr("width", 400)
            .attr("height", 30) 
            .attr("fill", "white")
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 1027)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Go Up Hierarchy")


        svg.append("circle")
            .attr("cx", 1342)
            .attr("cy", 105)
            .attr("r", 20)
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1372)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Click on any node in graph to make that node root.")

        let renderVal = Tab5Viz.Tab5VizRootName.split('__')
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1027)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
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
    render(){
        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100
        let words = ['bowel_cancer_aggregate', 'cirrhosis_aggregate', 'crohns_aggregate', 'diarrhea_aggregate', 'healthy_aggregate', 'parkinsons_aggregate']

        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]

            let svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 1150)
                    .attr("height", 1220)
                    .append("g")
                    .attr("transform", "translate(" + 1150 / 2 + "," + 1220 / 2 + ")");

            let word = words[i]

            svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text(word)

            if (Tab5Viz.Tab5VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            data = findChildByName(data, Tab5Viz.Tab5VizRootName)

            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
            }

            processData(data);

            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let partition = d3.partition()
                    .size([2 * Math.PI, 100]);

            let root = partition(hierarchy);

            let arr = this.selectedRemovals
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = reassignChildren(root, w, x);
                root = adjustDepths(root, x);
                root = partition(root);
            }
            
            let findIN = new FindIndicators(this.structureData[1])
            let [myArray, myArray2, myArray3, myArray4] = findIN.returnIndicators()
            calculateLeafDescendantsAndNames(root, myArray, myArray2, myArray3, myArray4);
            let maxNodeName = findMaxValueNodeAtDepth1(root, 'nameFoundTotal');

            sortHierarchy(root, maxNodeName);


            root.each(function(d) {
                if (d.children) {
                    var totalLeafDescendants = d.children.reduce(function(sum, child) {
                        return sum + child.totalLeafDescendants;
                    }, 0);

                    var currentAngle = d.x0;
                    d.children.forEach(function(child) {
                        var childWeight = child.totalLeafDescendants;
                        var angleRange = (childWeight / totalLeafDescendants) * (d.x1 - d.x0);
                        child.x0 = currentAngle;
                        child.x1 = currentAngle + angleRange;
                        currentAngle += angleRange;
                    });
                }
            });


            let checkedLevels = []
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    checkedLevels.push(parseInt(checkbox.value))
                }
            });

            let arc = createArc(findMaxDepth(root) - 1)
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);

            svg.selectAll("path")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .classed("sunburst-path", true)
                .attr("id", (d) => "path-" + d.data.name + "-" + (i+2))
                .attr("d", arc)
                .style("fill", function(d) { 
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)
                    let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
                    if (cdf === null){
                        return "white"
                    }
                    else{
                        if (cdf < 0){
                            return colorScaleLow(0)
                        }
                        else if (cdf >= 0 && cdf < sliderMin){
                            if (sliderMin === 0){
                                return "purple"
                            }
                            else{
                                return colorScaleLow(cdf)
                            }
                        }
                        else if (cdf >= sliderMax && cdf <= 1){
                            if (sliderMax === 1){
                                return "purple"
                            }
                            else{
                                return colorScaleHigh(cdf)
                            }
                        }
                        else if (cdf > 1){
                            return colorScaleHigh(1)
                        }
                        else{
                            return "purple"
                        }
                    }
                })
                .style("stroke", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)
                    let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
                    if (cdf === null){
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
                    let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
                    if (cdf === null){
                        return "0.1"
                    }
                    else{
                        return "1"
                    }
                }) 
                .style("stroke-width", function(d){
                    if (d.depth === 1){
                        return "1"
                    }
                    else if (d.depth >= 4){
                        return "0.1"
                    }
                    else{
                        return "0.5"
                    }
                })
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
                        Tab5Viz.Tab5VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab5')

                        that.render()
                    }
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[i+2])
                })
                .on("mouseout", that.mouseout)


                d3.selectAll(".sunburst-path").each(function(d, i) {
                    var element = d3.select(this);
                    element.attr("original-stroke", element.style("stroke"));
                    element.attr("original-stroke-width", element.style("stroke-width"));
                });
            
            let circle = svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 30)
                .attr("fill", "black")
                .on("click", function(event, p){
                    if (Tab5Viz.Tab5VizRootName !== undefined){
                        if (Tab5Viz.Tab5VizRootName === 'sk__Bacteria__2'){
                            that.selectedRemovals = []
                            enableCheckboxes2()
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab5')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render()
                        }
                        else{
                            let parent = findParentByName(Tab5Viz.Tab5VizData[0], Tab5Viz.Tab5VizRootName);
                            Tab5Viz.Tab5VizRootName = parent.name
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab5')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render()
                        } 
                    }
                })
                .append("title")
                .text(function(){
                    if (Tab5Viz.Tab5VizRootName === undefined){
                        return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                    }
                    else{
                        let myNames = Tab5Viz.Tab5VizRootName.split('__')
                        return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                    }
                })
        }
        
    }


}