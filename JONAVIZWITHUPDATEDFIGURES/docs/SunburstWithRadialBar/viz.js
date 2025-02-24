// Renders Visualization and Legend for tab 2
class Tab2Viz{

    static Tab2VizRootName
    static Tab2VizData
    static Tab2SelectedButtons

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals, tab2Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab2Viz.Tab2VizRootName = rootName
        this.selectedRemovals = selectedRemovals
        this.tab2Boolean = tab2Boolean
    }

    renderMainLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
        .attr("width", 2960)
        .attr("height", 430)

        svg.append("text")
        .attr("x", 0)
        .attr("y", 50)
        .attr("font-size", "58")
        .attr("fill", "Black")
        .text("Important Information For All Visualizations")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 120)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Picking at least one action will render 5 visualizations below: 3 sunbursts in the top row, 2 radial bars in the middle row.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("In the first row, Go Up Hierarchy using")


        svg.append("circle")
        .attr("cx", 675)
        .attr("cy", 155)  
        .attr("r", 20) 
        .attr("fill", "black") 

        svg.append("text")
        .attr("x", 705)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Current Root is also indicated by")

        svg.append("circle")
        .attr("cx", 1285)
        .attr("cy", 155)  
        .attr("r", 20) 
        .attr("fill", "black") 

        svg.append("text")
        .attr("x", 1315)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("This is 'zooming out'.")


        svg.append("text")
        .attr("x", 0)
        .attr("y", 220)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("In the first row, click on any node in one of the 3 sunbursts to make that node root. This is 'zooming in'.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 270)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("The root and it's children are shown in all the 5 diagrams. Therefore, zooming in or out will change the diagrams.")

        let renderVal = Tab2Viz.Tab2VizRootName.split('__')
        svg.append("text")
        .attr("x", 0)
        .attr("y", 320)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 370)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used. Checkboxes can affect all the 5 diagrams.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 420)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("The slider below only affects the sunbursts of the first row. Additionally, each row has its own legend on the left.")
    }

    renderLegendOfFirstRow(){
        let svg = d3.select(".dynamic-div-x2" ).append("svg")
        .attr("width", 760)
        .attr("height", 1070)

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
            .attr("width", 200) 
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
        .attr("x", 752)
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
            .attr("width", 200) 
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
            .attr("x", 752)
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
            .attr("width", 200) 
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
            .attr("x", 752)
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
            .text("LIO = Low-Indicator Organism")

        const gradient3 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient3")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient3.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#d2691e")
            .attr("stop-opacity", 1);

        gradient3.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#d2691e")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)   
            .attr("y", 300)   
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "url(#gradient3)") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 400)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("HIO = High-Indicator Organism")

        const gradient4 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient4")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient4.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#003300")
            .attr("stop-opacity", 1);

        gradient4.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#003300")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)    
            .attr("y", 370)    
            .attr("width", 200)
            .attr("height", 30) 
            .attr("fill", "url(#gradient4)") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")
    }


    renderLegendofSecondRow(){
        let svg = d3.select(".dynamic-div-x3" ).append("svg")
        .attr("width", 760)
        .attr("height", 1070)

        svg.append("text")
            .attr("x", 542)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Indicator Organisms")

        svg.append("rect")
            .attr("x", 552)   
            .attr("y", 90)    
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "blue")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 190)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Aggregate CDF in both figures")

        svg.append("rect")
            .attr("x", 552)  
            .attr("y", 160)   
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "Grey")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 260)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Sample CDF in 1st figure")

        svg.append("rect")
            .attr("x", 552)  
            .attr("y", 230)    
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "white") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 330)
            .attr("font-size", "35")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Sample Future CDF in 2nd figure")
            
        svg.append("rect")
            .attr("x", 552)   
            .attr("y", 300)   
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "white") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 400)
            .attr("font-size", "30")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Bad CDF change of Indicator Organism")
            
        svg.append("rect")
            .attr("x", 552)    
            .attr("y", 370)    
            .attr("width", 200)
            .attr("height", 30) 
            .attr("fill", "red") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 470)
            .attr("font-size", "29")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Good CDF change of Indicator Organism")
            
        svg.append("rect")
            .attr("x", 552)    
            .attr("y", 440)    
            .attr("width", 200)
            .attr("height", 30) 
            .attr("fill", "green") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 540)
            .attr("font-size", "30")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("No CDF change of Indicator Organism")
            
        svg.append("rect")
            .attr("x", 552)    
            .attr("y", 510)    
            .attr("width", 200)
            .attr("height", 30) 
            .attr("fill", "black") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 0)
            .attr("y", 610)
            .attr("font-size", "33")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .text("Arcs pointing inwards are low indicator organisms.")

        svg.append("text")
            .attr("x", 0)
            .attr("y", 680)
            .attr("font-size", "32")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .text("Arcs pointing outwards are high indicator organisms.")
    }

    // renders legend
    renderLegend(){
        this.renderMainLegend()
        this.renderLegendOfFirstRow()
        this.renderLegendofSecondRow()
        

        
    }

    // handles mouseover event for the visualizations in the second row
    handleMouseOver2(event, p, fileIndex, presentTaxons, cdfandabundanceData, transformedData3){

        const hoveredPathId = "path-" + p.data.organism
    
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 10);

        let mytext, cdf, abundance
        if (fileIndex === 5){
            let substringBeforeUnderscore
            for (let i = 0; i < presentTaxons.length; i++){
                let nodeName = presentTaxons[i]
                let index = nodeName.indexOf('_')
                let taxonRank = nodeName.substring(0, index)

                let lastIndex = nodeName.lastIndexOf('__')
                let firstIndex = nodeName.indexOf('__')
                let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                if (taxonName === p.data.organism){
                    substringBeforeUnderscore = nameMapping(taxonRank);
                }

                cdf = findTaxonCDFbyName(cdfandabundanceData, p.data.organism)
                if (cdf == null){
                    cdf = 0
                }
                
                abundance = findNodeValueByName(cdfandabundanceData, p.data.organism)
                if (abundance == null){
                    abundance = 0
                }
            }
            mytext = 'Name : ' + p.data.organism + "<br>" +
                    'Aggregate Relative Abundance for this disease: ' + ((parseFloat(p.data.abundance) * 100).toFixed(3)) + "%<br>" + 
                    'Sample Relative Abundance for this disease: ' + ((abundance * 100).toFixed(3)) + "%<br>" + 
                    'Aggregate Percentile Value for this disease: ' + ((parseFloat(p.data.cdf) * 100).toFixed(3)) + "%<br>" +
                    'Sample Percentile Value for this disease: ' + ((cdf * 100).toFixed(3)) + "%<br>" +
                    'Literature Weight for this disease: ' + p.data.weight + "<br>" +
                    'Rank : ' + substringBeforeUnderscore + "<br>" +
                    'NCBI Taxon ID: ' + p.data.ncbi_taxon_id + "<br>"
        }
        if (fileIndex === 6){
            let substringBeforeUnderscore
            let substringAfterUnderscore
            for (let i = 0; i < presentTaxons.length; i++){
                let nodeName = presentTaxons[i]
                let index = nodeName.indexOf('_')
                let taxonRank = nodeName.substring(0, index)

                let lastIndex = nodeName.lastIndexOf('__')
                let firstIndex = nodeName.indexOf('__')
                let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                if (taxonName === p.data.organism){
                    substringBeforeUnderscore = nameMapping(taxonRank);
                    substringAfterUnderscore = nodeName.substring(lastIndex+2)
                }
            }
            let cdf = findTaxonCDFbyName(cdfandabundanceData, p.data.organism)
            if (cdf == null){
                cdf = 0
            }
            let myWeight2 = findTaxonWeightbyName(transformedData3, p.data.organism)
            if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                for (let i = 0; i < myWeight2.length; i++){
                    if (myWeight2[i] < 0){
                        cdf = (Number(cdf) + 0)/2
                    }
                    else if (myWeight2[i] > 0){ 
                        cdf = (Number(cdf) + 1)/2
                    }
                }
            }
            let abundance = findNodeValueByName(cdfandabundanceData, p.data.organism)
            if (abundance == null){
                abundance = 0
            }
            mytext = 'Name : ' + p.data.organism + "<br>" +
                    'Aggregate Relative Abundance for this disease: ' + ((parseFloat(p.data.abundance) * 100).toFixed(3)) + "%<br>" + 
                    'Sample_Future Relative Abundance for this disease: ' + ((abundance * 100).toFixed(3)) + "%<br>" + 
                    'Aggregate Percentile Value for this disease: ' + ((parseFloat(p.data.cdf) * 100).toFixed(3)) + "%<br>" +
                    'Sample_Future Percentile Value for this disease: ' + ((cdf * 100).toFixed(3)) + "%<br>" +
                    'Literature Weight for this disease: ' + p.data.weight + "<br>" +
                    'Rank : ' + substringBeforeUnderscore + "<br>" +
                    'NCBI Taxon ID: ' + substringAfterUnderscore + "<br>"
        }
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    // handles mouseoout event for the visualizations in the second row
    mouseout2(event, p) {
        d3.selectAll(".sunburst-path").each(function(d, i) {
            var element = d3.select(this);
            element.style("stroke", element.attr("original-stroke"));
            element.style("stroke-width", element.attr("original-stroke-width"));
        });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }

    // handles mouseover event for the visualizations in the first row
    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData, transformedData, transformedData3) {

        let myName = p.data.name
        let li = myName.lastIndexOf('__')
        let fi = myName.indexOf('__')
        let hoverName = myName.substring(fi+2, li)
        const hoveredPathId = "path-" + hoverName
    
        
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 10);
            
        
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
        
        if (fileIndex === 2){
            if (cdf === null){
                cdf = '0%'
            }
            else{
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
        }
        if (fileIndex === 3){
            let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
            let myNames = findNamesbyName(transformedData3, taxonName)
            let myChange = []
            let myChange2 = []

            if (cdf !== null && myWeight !== null){
                for (let i = 0; i < myWeight.length; i++){
                    if (myWeight[i] < 0){
                        cdf = (Number(cdf) + 0)/2
                        myChange.push('Negative Influence:')
                    }
                    else if (myWeight[i] > 0){ 
                        cdf = (Number(cdf) + 1)/2
                        myChange.push('Positive Influence:')
                    }
                }
                
                let text = ''
                for (let j = 0; j < myChange.length; j++){
                    if (j === myChange.length - 1){
                        text = text + myChange[j] + myNames[j]
                    }
                    else{
                        text = text + myChange[j] + myNames[j] + '<br>'
                    }
                }
                cdf = (cdf * 100).toFixed(3) + '%' + '<br>' +  text
            }
            else if (myWeight !== null){
                let counter = 0
                for (let i = 0; i < myWeight.length; i++){
                    if (myWeight[i] < 0){
                        counter = (counter + 0)/2
                        myChange2.push('Negative Influence:')
                    }
                    else if (myWeight[i] > 0){ 
                        counter = (counter + 1)/2
                        myChange2.push('Positive Influence:')
                    }
                }

                let text = ''
                for (let j = 0; j < myChange2.length; j++){
                    if (j === myChange2.length - 1){
                        text = text + myChange2[j] + myNames[j]
                    }
                    else{
                        text = text + myChange2[j] + myNames[j] + '<br>'
                    }
                }
                if (counter <= 0.35){
                    cdf = 'low' + '<br>' + text
                }
                else if (counter > 0.35 && counter <= 0.65){
                    cdf = 'normal' + '<br>' + text
                }
                else if (counter > 0.65){
                    cdf = 'high' + '<br>' + text
                }
            }
            else if (cdf !== null){
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
            else{
                cdf = '0%'
            }
        }
        if (fileIndex === 4){
            let myWeight = findTaxonWeightbyName(transformedData, taxonName)
            if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                cdf = 'N/A'
            }
            else{
                cdf = findTaxonCDFbyName2(transformedData, taxonName)
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
        }
        
        let myVal = findNodeValueByName(cdfContainerData, taxonName)
        if (myVal === undefined){
            myVal = 0 + '%'
        }
        else{
            myVal = (myVal * 100).toFixed(6) + '%'
        }

        if (fileIndex === 4){
            let myWeight = findTaxonWeightbyName(transformedData, taxonName)
            if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                myVal = 'N/A'
            }
            else{
                myVal = findNodeValueByName2(transformedData, taxonName)
                myVal = (parseFloat(myVal) * 100).toFixed(3) + '%'
            }
        }
    
    
        let mytext = 'Name : ' + myNames[1] + "<br>" +
            'Relative Abundance in this dataset : ' + myVal+ "<br>" + 
            'Percentile Value : ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"

        if (fileIndex === 4){
            mytext = 'Name : ' + myNames[1] + "<br>" +
            'Aggregate Relative Abundance for this disease : ' + myVal+ "<br>" + 
            'Aggregate Percentile Value for this disease: ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"
        }
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    // handles mouseoout event for the visualizations in the first row
    mouseout(event, p) {
        d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.style("stroke", element.attr("original-stroke"));
                element.style("stroke-width", element.attr("original-stroke-width"));
            });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }


    // fills this tab's dropdown and after an element is selected from the dropdown, the visualization is rendered
    fillDropDown(){
        const div = document.getElementById('selectedContainer-T2');
        const buttons = div.querySelectorAll('button');


        if (buttons.length === 0 || this.tab2Boolean === 'new'){
            let diseaseNames = ["Resistant Starch", "Iron", "Vitamin D", "Omega-3 Fatty Acids", "Intermittent Fasting"]//this.structureData[2].map(item => item.Name);

            const selectBox = document.getElementById('selectBox-T2');
            let selectedValues = [];
            let inputField = document.getElementById('selectInput-T2');
            const selectedContainer = document.getElementById('selectedContainer-T2');
            const that = this;  

            function updateSelectedContainer() {
                selectedContainer.innerHTML = '';
                selectedValues.forEach((value, index) => {
                    const span = document.createElement('span');
                    span.textContent = value;

                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'x';
                    removeButton.addEventListener('click', function() {
                        selectedValues.splice(index, 1);
                        updateSelectedContainer();
                        Tab2Viz.Tab2SelectedButtons = selectedValues

                        if (selectedValues.length === 0){
                            Tab2Viz.Tab2VizRootName = 'sk__Bacteria__2'
                        }
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');
                        const currentValues = getCurrentSliderValues();
                        this.sliderMin = currentValues.minValue
                        this.sliderMax = currentValues.maxValue
                        that.render(selectedValues);
                    });

                    span.appendChild(removeButton);
                    selectedContainer.appendChild(span);
                });
            }

            function initializeOptions() {
                selectBox.innerHTML = ''; 
                diseaseNames.forEach(option => {
                    let div = document.createElement('div');
                    div.textContent = option;
                    div.addEventListener('click', function() {
                        if (!selectedValues.includes(this.innerText)) {
                            selectedValues.push(this.innerText);
                            updateSelectedContainer();
                        }
                        inputField.value = ''; 
                        selectBox.style.display = 'none';
                        Tab2Viz.Tab2SelectedButtons = selectedValues
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');
                        const currentValues = getCurrentSliderValues();
                        that.sliderMin = currentValues.minValue
                        that.sliderMax = currentValues.maxValue
                        that.render(selectedValues);
                    });
                    selectBox.appendChild(div);
                });
            }

            inputField.addEventListener('input', function() {
                let filter = this.value.toUpperCase();
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

            inputField.addEventListener('focus', function() {
                selectBox.style.display = 'block';
                initializeOptions();
            });

            document.addEventListener('click', function(event) {
                if (!event.target.matches('#selectInput-T2') && !event.target.closest('.select-items-T2')) {
                    selectBox.style.display = 'none';
                }
            });

            initializeOptions();
            updateSelectedContainer();
        }
        else{
            removeVizDivs();
            renderVizDivs(Tab2Viz.Tab2SelectedButtons.length, 'tab2');
            const currentValues = getCurrentSliderValues();
            this.sliderMin = currentValues.minValue
            this.sliderMax = currentValues.maxValue
            this.render(Tab2Viz.Tab2SelectedButtons);
        }
    }

    // transforms data to be used later 
    transformObject(obj, cdfContainerData) {
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


                let secondOpenParen = this.findNthOccurrence(value, '(', 2);
                let secondCloseParen = this.findNthOccurrence(value, ')', 2);
                let string3 = value.substring(secondOpenParen + 1, secondCloseParen);
                let index = string3.indexOf('=');
                let number3 = string3.substring(index+1)

                let thirdOpenParen = this.findNthOccurrence(value, '(', 3);
                let thirdCloseParen = this.findNthOccurrence(value, ')', 3);
                let string4 = value.substring(thirdOpenParen + 1, thirdCloseParen);
                let index2 = string4.indexOf('=');
                let number4 = string4.substring(index2+1)

                const transformedObj = {};
                transformedObj.organism = result; 
                transformedObj.ncbi_taxon_id = number;
                transformedObj.weight = number2;
                transformedObj.abundance = number3
                transformedObj.cdf = number4

                transformedObjects.push(transformedObj);
            }
        });
        return transformedObjects;
    }

    // used by function above
    findNthOccurrence(str, char, n) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
                if (count === n) {
                    return i;
                }
            }
        }
        return -1;
    }


    // transforms data to be used later
    transformObject2(obj) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1) {
                let value = obj[key];
    
                const firstCloseBracketIndex = value.indexOf(']');
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex + 1, firstOpenParenIndex).trim();
    
                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : '620';
    
                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;
    
                if (result !== ' ') {
                    let existingObj = transformedObjects.find(obj => obj.organism === result);
    
                    if (existingObj) {
                        if (!Array.isArray(existingObj.weight)) {
                            existingObj.weight = [existingObj.weight];
                            existingObj.action = [obj.Name];
                        }
                        existingObj.weight.push(number2);
                        existingObj.action.push(obj.Name);
                    } else {
                        const transformedObj = {};
                        transformedObj.organism = result;
                        transformedObj.ncbi_taxon_id = number;
                        transformedObj.weight = [number2];
                        transformedObj.action = [obj.Name]
                        transformedObjects.push(transformedObj);
                    }
                }
            }
        });
        return transformedObjects;
    }

    // transform array based on data sent
    transformArray2(X){
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            if (i < 3){
                newArray.push(X[i]);
            }
            else{
                newArray.push(X[i]);
            }
        }
        return newArray;
    }

    // transform array based on data sent
    transformArray(X) {
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            newArray.push(X[i]);
            newArray.push(X[i]);
        }
        return newArray;
    }


    // renders the visualizations for this tab 
    render(diseaseName){

        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100

        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === 'Crohn Disease'){
                myRow = csvData[row]
                break
            }
        }

        let transformedData = this.transformObject(myRow);

        let csvData3 = this.structureData[2];
        let transformedData3 = [];

        for (const name of diseaseName) {
            let myRow;

            for (const row of csvData3) {
                if (row.Name === name) {
                    myRow = row;
                    break; 
                }
            }

            
            if (myRow) {
                let result = this.transformObject2(myRow);
        
                if (Array.isArray(result)) {
                    transformedData3.push(...result);
                } else {
                    transformedData3.push(result);
                }
            }
        }


        const combinedResults = {};

        transformedData3.forEach(item => {
            if (!combinedResults[item.organism]) {
                combinedResults[item.organism] = {
                    ncbi_taxon_id: item.ncbi_taxon_id,
                    weight: [],
                    action: []
                };
            }
            combinedResults[item.organism].weight.push(...item.weight);
            combinedResults[item.organism].action.push(...item.action);
        });

        const resultArray = Object.keys(combinedResults).map(key => ({
            organism: key,
            ncbi_taxon_id: combinedResults[key].ncbi_taxon_id,
            weight: combinedResults[key].weight,
            action: combinedResults[key].action
        }));


        transformedData3 = resultArray





        let selectedOptionsArray = this.transformArray(this.selectedOptions)

        let selectedDataArray = this.transformArray2(this.structureData)
        

        let presentTaxons = []
        let givenCDFs = []
        let givenCDFs2 = []
        let givenCDFs3 = []
        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]
            let svg 

            if (i <= 4){
                svg = d3.select(this.classNames[i]).append("svg")
                .attr("width", 1150)
                .attr("height", 1220)
                .append("g")
                .attr("transform", "translate(" + 1150 / 2 + "," + 1220 / 2 + ")");
            }
            else if (i === 5){

                svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 3120)
                    .attr("height", 1220)
                    .append("g")
                    .attr("transform", `translate(${100},${20})`);
            }
            let word = this.selectedOptions[i]

            if (i === 0){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Current Organisms Of Sample')
            }
            else if (i === 1){
                svg.append("text")
                .attr("x", -450)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Future Organisms Of Sample -- Given Action')
            }
            else if (i === 2){
                svg.append("text")
                .attr("x", -560)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Crohns Indicator Organisms of "Aggregate" Samples')
            }
            else if (i === 3){
                svg.append("text")
                .attr("x", -450)
                .attr("y", -580)
                .attr("font-size", "38")
                .attr("fill", "black")
                .text('Crohns Indicator Organisms for Aggregate vs Sample')
            }
            else if (i === 4){
                svg.append("text")
                .attr("x", -480)
                .attr("y", -580)
                .attr("font-size", "28")
                .attr("fill", "black")
                .text('Crohns Indicator Organisms for Aggregate vs Sample Future -- Given Action')
            }
            

            
            if (Tab2Viz.Tab2VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }


            data = findChildByName(data, Tab2Viz.Tab2VizRootName)

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
 
            let arc = createArc(findMaxDepth(root) - 1)

            // cons
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);

            let indicatorLow = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#654321", "#d2691e"]);
            
            let indicatorHigh = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#E0FFE0", "#003300"]);


            if (i === 0 || i === 1 || i === 2){
                svg.selectAll("path")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .classed("sunburst-path", true)
                .attr("id", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    return "path-" + taxonName
                }) 
                .attr("d", arc)
                .style("fill", function(d) { 
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        
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
                    }
            
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)

                        let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)

                        if (cdf !== null && myWeight !== null){

                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    cdf = (Number(cdf) + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    cdf = (Number(cdf) + 1)/2
                                }
                            }
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (myWeight !== null){
                            let number = 0
                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    number = (number + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    number = (number + 1)/2
                                }
                            }

                            if (number < 0){
                                return colorScaleLow(0)
                            }
                            else if (number >= 0 && number < sliderMin){
                                return colorScaleLow(number)
                            }
                            else if (number >= sliderMax && number <= 1){
                                return colorScaleHigh(number)
                            }
                            else if (number > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (cdf !== null){
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else{
                            return "white"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "white"
                        }
                        else{
                            presentTaxons.push(nodeName)
                            if (myWeight > 0){
                                return "#003300"
                            }
                            else{
                                return "#d2691e"
                            }
                        }
                    }
                })
                .style("stroke", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)

                        if (cdf === null){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "grey"
                            }
                            else{
                                return "black"
                            }
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                })
                .style("opacity", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        if (cdf === null){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                }) 
                .style("stroke-width", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        if (cdf === null){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "5"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
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
                        Tab2Viz.Tab2VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab2')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render(diseaseName)
                    }
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[3], transformedData, transformedData3)
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
                        if (Tab2Viz.Tab2VizRootName !== undefined){
                            if (Tab2Viz.Tab2VizRootName === 'sk__Bacteria__2'){
                                that.selectedRemovals = []
                                enableCheckboxes2()
                                removeVizDivs()
                                renderVizDivs(that.selectedOptions.length, 'tab2')
                                removeLegendDivs()
                                renderLegendDivs()
                                that.renderLegend()
                                that.render(diseaseName)
                            }
                            else{
                                let parent = findParentByName(Tab2Viz.Tab2VizData[0], Tab2Viz.Tab2VizRootName);
                                Tab2Viz.Tab2VizRootName = parent.name
                                removeVizDivs()
                                renderVizDivs(that.selectedOptions.length, 'tab2')
                                removeLegendDivs()
                                renderLegendDivs()
                                that.renderLegend()
                                that.render(diseaseName)
                            } 
                        }
                    })
                    .append("title")
                    .text(function(){
                        if (Tab2Viz.Tab2VizRootName === undefined){
                            return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                        }
                        else{
                            let myNames = Tab2Viz.Tab2VizRootName.split('__')
                            return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                        }
                    })
            }

            
            if (i === 3 || i === 4 || i === 5){
                

                let curatedPresentTaxons = []
                for (let i = 0; i < presentTaxons.length; i++){
                    let nodeName = presentTaxons[i]
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    curatedPresentTaxons.push(taxonName)
                }

                transformedData = transformedData.filter(obj => curatedPresentTaxons.includes(obj.organism));

                if (i === 3){

                    const margin = 30;

                    
                    const radius = Math.min(1150, 1220) / 2 - margin;
                    const innerRadius = 300; 

                    

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 375)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 425)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")
                    
                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 550)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")


                    
                    const color = d3.scaleOrdinal()
                        .domain(transformedData.map(d => d.organism))
                        .range(d3.schemeCategory10);
            
                    
                    const pie = d3.pie()
                        .value(() => 1)
                        .sort(null)
                        .padAngle(0.02);
            
                    
                    const arc = d3.arc()
                        .innerRadius(375) 
                        .outerRadius(425); 

                    svg
                        .selectAll('allSlices')
                        .data(pie(transformedData))
                        .enter()
                        .append('path')
                        .classed("sunburst-path", true) 
                        .attr("id", (d) => "path-" + d.data.organism) 
                        .attr('d', arc)
                        .attr('fill', function(d){
                            return "blue"
                        })
                        .attr("stroke", "black")
                        .style("stroke-width", "2px")
                        .style("opacity", 1)
                        .on("mouseover", function (event, d){
                            that.handleMouseOver2(event, d, i+2, presentTaxons, that.structureData[3], transformedData3)
                        })
                        .on("mouseout", that.mouseout2)

                    const arc2 = d3.arc()
                        .innerRadius(d => {
                            if (d.data.weight < 0){
                                return 375
                            }
                            else{
                                return 425
                            }
                        }) 
                        .outerRadius(d => {
                            if (d.data.weight < 0){
                                let val = 1 - Number(d.data.cdf)
                                let num = 375 + (-175 * val)
                                return num
                            }
                            else{
                                let val = Number(d.data.cdf)
                                let num = 425 + (125 * val)
                                return num
                            }
                        }); 

                    const arc3 = d3.arc()
                        .innerRadius(d => {
                            if (d.data.weight < 0){
                                return 375
                            }
                            else{
                                return 425
                            }
                        }) 
                        .outerRadius(d => {
                            let cdf = findTaxonCDFbyName(that.structureData[3], d.data.organism)
                            if (cdf === null){
                                cdf = 0
                            }

                            if (d.data.weight < 0){
                                let val = 1 - Number(cdf)
                                let num = 375 + (-175 * val)
                                return num
                            }
                            else{
                                let val = Number(cdf)
                                let num = 425 + (125 * val)
                                return num
                            }
                        }); 

                    const calculateRadii = (d) => {
                        const radii = [
                            arc2.outerRadius()(d),
                            arc3.outerRadius()(d)
                        ];
                        return radii;
                    };
                    
                    const combinedData = pie(transformedData).map(d => {
                        const radii = calculateRadii(d);
                        return {
                            data: d,
                            radii: radii,
                            maxRadius: Math.max(...radii),
                            maxIndex: radii.indexOf(Math.max(...radii))
                        };
                    });
                    

                    combinedData.sort((a, b) => b.maxRadius - a.maxRadius);

                    const arcs = [arc2, arc3];
                    const colors = ["grey", "white"];

                    combinedData.forEach((d, i) => {
                        let order;
                        if (d.data.data.weight < 0) {
                            order = [0, 1].sort((a, b) => d.radii[a] - d.radii[b]);
                        } else {
                            order = [0, 1].sort((a, b) => d.radii[b] - d.radii[a]);
                        }

                        order.forEach(index => {
                            svg
                                .append('path')
                                .attr('d', arcs[index](d.data))
                                .attr('fill', colors[index])
                                .attr("stroke", "black")
                                .style("stroke-width", "2px")
                                .style("opacity", 1);
                        });
                    });

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 200)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")

                    d3.selectAll(".sunburst-path").each(function(d, i) {
                        var element = d3.select(this);
                        element.attr("original-stroke", element.style("stroke"));
                        element.attr("original-stroke-width", element.style("stroke-width"));
                    });
                }
                if (i === 4){

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 572)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")


                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 375)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 425)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")
                    
                    
                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 550)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")

                    
                    const color = d3.scaleOrdinal()
                        .domain(transformedData.map(d => d.organism))
                        .range(d3.schemeCategory10);


                    const pie = d3.pie()
                        .value(() => 1) 
                        .sort(null)
                        .padAngle(0.02); 

                    const arc = d3.arc()
                        .innerRadius(375) 
                        .outerRadius(425);

                    svg
                        .selectAll('allSlices')
                        .data(pie(transformedData))
                        .enter()
                        .append('path')
                        .classed("sunburst-path", true) 
                        .attr("id", (d) => "path-" + d.data.organism)
                        .attr('d', arc)
                        .attr('fill', function(d){
                            return "blue"
                        })
                        .attr("stroke", "black")
                        .style("stroke-width", "2px")
                        .style("opacity", 1)
                        .on("mouseover", function (event, d){
                            that.handleMouseOver2(event, d, i+2, presentTaxons, that.structureData[3], transformedData3)
                        })
                        .on("mouseout", that.mouseout2)

                    

                    const arc2 = d3.arc()
                        .innerRadius(d => {
                            if (d.data.weight < 0){
                                return 375
                            }
                            else{
                                return 425
                            }
                        }) 
                        .outerRadius(d => {
                            if (d.data.weight < 0){
                                let val = 1 - Number(d.data.cdf)
                                let num = 375 + (-175 * val)
                                return num
                            }
                            else{
                                let val = Number(d.data.cdf)
                                let num = 425 + (125 * val)
                                return num
                            }
                        }); 

                    let changeR = []
                    const arc4 = d3.arc()
                        .innerRadius(d => {
                            if (d.data.weight < 0){
                                return 375
                            }
                            else{
                                return 425
                            }
                        })
                        .outerRadius(d => {
                            let cdf = findTaxonCDFbyName(that.structureData[3], d.data.organism)
                            if (cdf === null){
                                cdf = 0
                            }

                            let init = cdf

                            let myWeight2 = findTaxonWeightbyName(transformedData3, d.data.organism)
                            if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                                for (let i = 0; i < myWeight2.length; i++){
                                    if (myWeight2[i] < 0){
                                        cdf = (Number(cdf) + 0)/2
                                    }
                                    else if (myWeight2[i] > 0){ 
                                        cdf = (Number(cdf) + 1)/2
                                    }
                                }
                            }

                            let after = cdf
                            let val 
                            if (d.data.weight < 0){
                                if (init < after){
                                    val = 'good'
                                    changeR.push(val)
                                }
                                else if (init === after){
                                    val = 'unchanged'
                                    changeR.push(val)
                                }
                                else if (init > after){
                                    val = 'bad'
                                    changeR.push(val) 
                                }
                            }
                            else{
                                if (init > after){
                                    val = 'good'
                                    changeR.push(val)
                                }
                                else if (init === after){
                                    val = 'unchanged'
                                    changeR.push(val)
                                }
                                else{
                                    val = 'bad'
                                    changeR.push(val) 
                                }
                            }

                            if (d.data.weight < 0){
                                let val = 1 - Number(cdf)
                                let num = 375 + (-175 * val)
                                return num
                            }
                            else{
                                let val = Number(cdf)
                                let num = 425 + (125 * val)
                                return num
                            }
                        });

                    const calculateRadii = (d) => {
                        const radii = [
                            arc2.outerRadius()(d),
                            arc4.outerRadius()(d)
                        ];
                        return radii;
                    };
                    
                    const combinedData = pie(transformedData).map(d => {
                        const radii = calculateRadii(d);
                        return {
                            data: d,
                            radii: radii,
                            maxRadius: Math.max(...radii),
                            maxIndex: radii.indexOf(Math.max(...radii))
                        };
                    });
                    
                    combinedData.sort((a, b) => b.maxRadius - a.maxRadius);

                    const arcs = [arc2, arc4];
                    const colors = ["grey", "white"];

                    combinedData.forEach((d, i) => {
                        let order;
                        if (d.data.data.weight < 0) {
                            order = [0, 1].sort((a, b) => d.radii[a] - d.radii[b]);
                        } else {
                            order = [0, 1].sort((a, b) => d.radii[b] - d.radii[a]);
                        }

                        order.forEach(index => {
                            svg
                                .append('path')
                                .attr('d', arcs[index](d.data))
                                .attr('fill', colors[index]) 
                                .attr("stroke", "black")
                                .style("stroke-width", "2px")
                                .style("opacity", 1);
                        });
                    });

                    svg.append("circle")
                        .attr("cx", 0)
                        .attr("cy", 0)
                        .attr("r", 200)
                        .attr("fill", "white")
                        .attr("stroke", "black")
                        .style("stroke-width", "5px")

                    const firstNElements = changeR
                    const arc5 = d3.arc()
                        .innerRadius(550) 
                        .outerRadius(572);

                    svg
                        .selectAll('allSlices')
                        .data(pie(transformedData))
                        .enter()
                        .append('path')
                        .classed("sunburst-path", true) 
                        .attr("id", (d) => "path-" + d.data.organism) 
                        .attr('d', arc5)
                        .attr('fill', function(d){
                            if (firstNElements[d.index] === 'bad'){
                                return 'red'
                            }
                            else if (firstNElements[d.index] === 'unchanged'){
                                return 'black'
                            }
                            else if (firstNElements[d.index] === 'good'){
                                return 'green'
                            }
                        })
                        .attr("stroke", "black")
                        .style("stroke-width", "1px")
                        .style("opacity", 1)

                    d3.selectAll(".sunburst-path").each(function(d, i) {
                        var element = d3.select(this);
                        element.attr("original-stroke", element.style("stroke"));
                        element.attr("original-stroke-width", element.style("stroke-width"));
                    });
                }


                // if (i === 5){
                    
                //     let data2 = []
                //     for (let i = 0; i < transformedData.length; i++){
                //         let dataPoint = transformedData[i]

                //         let category = dataPoint.organism
                //         let weight = dataPoint.weight

                //         let x1, x2, x3
                //         if (weight > 0){
                //             x1 = Number(dataPoint.cdf)
                //         }
                //         else{
                //             x1 = 1 - Number(dataPoint.cdf)
                //             x1 = x1 * -1
                //         }

                        
                //         let cdf = findTaxonCDFbyName(that.structureData[3], dataPoint.organism)
                //         if (cdf === null){
                //             cdf = 0
                //         }
                //         x2 = cdf
                //         if (weight < 0){
                //             x2 = 1 - x2
                //             x2 = x2 * -1
                //         }


                //         let myWeight2 = findTaxonWeightbyName(transformedData3, dataPoint.organism)
                //         if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                //             for (let i = 0; i < myWeight2.length; i++){
                //                 if (myWeight2[i] < 0){
                //                     cdf = (Number(cdf) + 0)/2
                //                 }
                //                 else if (myWeight2[i] > 0){ 
                //                     cdf = (Number(cdf) + 1)/2
                //                 }
                //             }
                //         }
                //         x3 = cdf
                //         if (weight < 0){
                //             x3 = 1 - x3
                //             x3 = x3 * -1
                //         }

                //         data2.push({ label: category, category1: Number(x1), category2: Number(x2), category3: Number(x3)});
                //     }

                //     console.log(data2)
                    
                //     const categories = ["category1", "category2", "category3"];

                //     const processedData = data2.map(d => {
                //         const sortedCategories = categories.map(cat => ({
                //             key: cat,
                //             value: d[cat]
                //         })).sort((a, b) => Math.abs(b.value) - Math.abs(a.value)); // Sort by absolute value

                //         let y0 = 0;
                //         return sortedCategories.map((cat, index) => {
                //             const result = {
                //                 label: d.label,
                //                 category: cat.key,
                //                 y0: y0,
                //                 y1: y0 + cat.value
                //             };
                //             y0 += cat.value;
                //             return result;
                //         });
                //     }).flat();

                //     // Set the scales
                //     const xScale = d3.scalePoint()
                //         .domain(processedData.map(d => d.label))
                //         .range([0, 3120])
                //         .padding(0.5);

                //     const yMin = Math.min(0, d3.min(processedData, d => Math.min(d.y0, d.y1)));
                //     const yMax = Math.max(0, d3.max(processedData, d => Math.max(d.y0, d.y1)));
                //     const yScale = d3.scaleLinear()
                //         .domain([yMin, yMax])
                //         .range([1220, 0]);

                //     const colorScale = d3.scaleOrdinal()
                //         .domain(categories)
                //         .range(["cyan", "yellow", "green"]);

                //     const area = d3.area()
                //         .x(d => xScale(d.label))
                //         .y0(d => yScale(d.y0))
                //         .y1(d => yScale(d.y1))
                //         .curve(d3.curveLinear);
                    
                //     const groupedData = d3.group(processedData, d => d.category);
                    
                //     for (const [key, value] of groupedData) {
                //         svg.append("path")
                //             .datum(value)
                //             .attr("class", "ribbon")
                //             .attr("d", area.curve(d3.curveBasis))
                //             .style("fill", colorScale(key))
                //             .style("stroke", "#000")
                //             .style("stroke-width", 1);
                //     }

                //     const xAxis = svg.append("g")
                //         .attr("transform", `translate(0,${yScale(0)})`)
                //         .call(d3.axisBottom(xScale));

                //     xAxis.selectAll("text").style("font-size", "25px");

                //     const yAxis = svg.append("g")
                //         .call(d3.axisLeft(yScale)
                //             .tickFormat(d3.format(".2f"))); // Format numbers to 2 decimal places

                //     yAxis.selectAll("text")
                //         .style("font-size", "23px")
                //         .style("fill", "black");

                //     yAxis.selectAll("line")
                //         .style("stroke", "black");

                //     yAxis.select("path")
                //         .style("stroke", "black");

                //     // Add some padding to the left of the chart
                //     svg.attr("transform", "translate(50, 0)");

                //     svg.append("text")
                //         .attr("transform", "rotate(-90)")
                //         .attr("y", 0 - 100)
                //         .attr("x", 0 - (1220 / 2))
                //         .attr("dy", "1em")
                //         .style("text-anchor", "middle")
                //         .style("font-size", "18px")
                //         .text("Value");
                // }











                // if (i === 5){
                //     console.log(transformedData)
                //     let values = []
                //     for (let i = 0; i < transformedData.length; i++){
                //         let dataPoint = transformedData[i]

                //         let category = dataPoint.organism
                //         let weight = dataPoint.weight

                //         let x1, x2, x3
                //         if (weight > 0){
                //             x1 = Number(dataPoint.cdf)
                //         }
                //         else{
                //             x1 = 1 - Number(dataPoint.cdf)
                //             // x1 = x1 * -1
                //         }

                        
                //         let cdf = findTaxonCDFbyName(that.structureData[3], dataPoint.organism)
                //         if (cdf === null){
                //             cdf = 0
                //         }
                //         // console.log('B: ', cdf)
                //         x2 = cdf
                //         if (weight < 0){
                //             x2 = 1 - x2
                //             // x2 = x2 * -1
                //         }


                //         let myWeight2 = findTaxonWeightbyName(transformedData3, dataPoint.organism)
                //         // console.log('Actions:', myWeight2)
                //         if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                //             for (let i = 0; i < myWeight2.length; i++){
                //                 if (myWeight2[i] < 0){
                //                     cdf = (Number(cdf) + 0)/2
                //                 }
                //                 else if (myWeight2[i] > 0){ 
                //                     cdf = (Number(cdf) + 1)/2
                //                 }
                //             }
                //         }
                //         // console.log('C: ', cdf)
                //         x3 = cdf
                //         if (weight < 0){
                //             x3 = 1 - x3
                //             // x3 = x3 * -1
                //         }

                //         values.push(Number(x3));
                //     }

                //     const data2 = [{category: "A", values:values}]

                //     // const data2 = [
                //     //     { category: "A", values: Array.from({ length: 100 }, () => Math.random()) },
                //     //     // { category: "B", values: Array.from({ length: 100 }, () => Math.random()) },
                //     //     // { category: "C", values: Array.from({ length: 100 }, () => Math.random()) }
                //     // ];
            
                //     const width = 1150;
                //     const height = 1220;
                //     const margin = { top: 50, right: 50, bottom: 50, left: 50 };
            
            
                //     const radius = Math.min(width, height) / 2 - Math.max(margin.top, margin.right, margin.bottom, margin.left);

                //     const angleSlice = Math.PI * 2 / data2[0].values.length;

                //     const rScale = d3.scaleLinear()
                //                     .range([0, radius])
                //                     .domain([0, 1]);

                //     const radarLine = d3.lineRadial()
                //         .curve(d3.curveLinearClosed)
                //         .radius(d => rScale(d))
                //         .angle((d, i) => i * angleSlice);

                //     const radarWrapper = svg.append("g")
                //         .attr("transform", `translate(${width / 2}, ${height / 2})`);

                //     radarWrapper.selectAll(".axis")
                //         .data(data2[0].values)
                //         .enter().append("g")
                //         .attr("class", "axis")
                //         .each(function(d, i) {
                //             d3.select(this).append("line")
                //                 .attr("x1", 0)
                //                 .attr("y1", 0)
                //                 .attr("x2", rScale(1) * Math.cos(angleSlice * i - Math.PI / 2))
                //                 .attr("y2", rScale(1) * Math.sin(angleSlice * i - Math.PI / 2))
                //                 .style("stroke", "#ddd")
                //                 .style("stroke-width", 5)
            
                //             // d3.select(this).append("text")
                //             //     .attr("class", "legend")
                //             //     .attr("x", rScale(1) * 1.1 * Math.cos(angleSlice * i - Math.PI / 2))
                //             //     .attr("y", rScale(1) * 1.1 * Math.sin(angleSlice * i - Math.PI / 2))
                //             //     .attr("dy", "0.35em")
                //             //     .style("text-anchor", "middle")
                //             //     .text(`Axis ${i + 1}`);
                //         });
            
                //     console.log(data2)

                //     const colorMap = {
                //         "A": "black",
                //         "B": "black",
                //         "C": "black"
                //     };
            
                //     data2.forEach((d, dataIndex) => {
                //         const valuesToPlot = d.values;
            
                //         radarWrapper.append("path")
                //             .attr("class", "radarArea")
                //             .attr("d", radarLine(valuesToPlot))
                //             .style("fill", colorMap[d.category])
                //             .style("stroke", colorMap[d.category])
                //             .style("stroke-width", 3)
                //             .style("fill-opacity", 0.05);
            
                //         radarWrapper.append("path")
                //             .attr("class", "radarStroke")
                //             .attr("d", radarLine(valuesToPlot))
                //             .style("stroke-width", 2)
                //             .style("stroke", colorMap[d.category])
                //             .style("fill", "none");
                //     });
                // }






























































                // if (i === 5){
                //     const margin = 30;

                //     // The radius of the pieplot is half the smaller dimension
                //     const radius = Math.min(1150, 1220) / 2 - margin;
                //     const innerRadius = 300; // Radius for the inner circle
            
                //     // Set the color scale
                //     const color = d3.scaleOrdinal()
                //         .domain(transformedData.map(d => d.organism))
                //         .range(d3.schemeCategory10);
            
                //     // Compute the position of each group on the pie with equal slices
                //     const pie = d3.pie()
                //         .value(() => 1) // Equal slices for each data point
                //         .sort(null)
                //         .padAngle(0.02); // Small separation between slices
            
                //     // Create the arc generator
                //     const arc = d3.arc()
                //         .innerRadius(innerRadius) // Radius for the inner circle
                //         .outerRadius(d => {
                //             let cdf = findTaxonCDFbyName(that.structureData[3], d.data.organism)
                //             if (cdf === null){
                //                 cdf = 0
                //             }

                //             // console.log('Organism: ', d.data.organism)
                //             // console.log("Weight: ", d.data.weight)
                //             // console.log('CDF1: ', cdf)
                //             let myWeight2 = findTaxonWeightbyName(transformedData3, d.data.organism)
                //             // console.log('Actions:', myWeight2)
                //             if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                //                 for (let i = 0; i < myWeight2.length; i++){
                //                     if (myWeight2[i] < 0){
                //                         cdf = (Number(cdf) + 0)/2
                //                     }
                //                     else if (myWeight2[i] > 0){ 
                //                         cdf = (Number(cdf) + 1)/2
                //                     }
                //                 }
                //             }
                //             givenCDFs3.push([Number(d.data.weight), Number(cdf)])
                //             // console.log('CDF2: ', cdf)
                //             let val
                //             if (d.data.weight < 0){
                //                 val = 1 - cdf
                //             }
                //             else{
                //                 val = cdf
                //             }
                //             // console.log('CDF3: ', val)
                //             // console.log(d.data.weight)
                //             return innerRadius + (radius - innerRadius) * val
                //         }); // Scale radius by value

                //     svg
                //         .selectAll('allSlices')
                //         .data(pie(transformedData))
                //         .enter()
                //         .append('path')
                //         .classed("sunburst-path", true) // Add a class to each path
                //         .attr("id", (d) => "path-" + d.data.organism) // Add a unique ID to each path
                //         .attr('d', arc)
                //         .attr('fill', function(d){
                //             // console.log('here')
                //             if (d.data.weight < 0){
                //                 return '#d2691e'
                //             }
                //             else{
                //                 return '#003300'
                //             }
                //         })
                //         .attr("stroke", function(d){
                //             let myWeight2 = findTaxonWeightbyName(transformedData3, d.data.organism)
                //             if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                //                 return "blue"
                //             }
                //             else{
                //                 return "black"
                //             }
                //         })
                //         .style("stroke-width", function(d){
                //             let myWeight2 = findTaxonWeightbyName(transformedData3, d.data.organism)
                //             if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                //                 return "5"
                //             }
                //             else{
                //                 return "2"
                //             }
                //         })
                //         .style("opacity", 1)
                //         .on("mouseover", function (event, d){
                //             that.handleMouseOver2(event, d, i+2, presentTaxons, that.structureData[3], transformedData3)
                //         })
                //         .on("mouseout", that.mouseout2)

                //     svg.append("circle")
                //         .attr("cx", 0)
                //         .attr("cy", 0)
                //         .attr("r", innerRadius)
                //         .attr("fill", "white")
                //         .attr("stroke", "black")
                //         .style("stroke-width", "2px")

                //     d3.selectAll(".sunburst-path").each(function(d, i) {
                //         var element = d3.select(this);
                //         element.attr("original-stroke", element.style("stroke"));
                //         element.attr("original-stroke-width", element.style("stroke-width"));
                //     });

                //     let similarityCounter = 0
                //     for (let i = 0; i < givenCDFs.length; i++) {
                //         // Check if the first element (x) in array 'a' at index 'i' is positive
                //         if (givenCDFs[i][0] > 0) {
                //             if (givenCDFs3[i][1] >= givenCDFs[i][1]){
                //                 similarityCounter += 1
                //             }
                //             else{
                //                 similarityCounter += 1 - Math.abs(givenCDFs[i][1] - givenCDFs3[i][1])
                //             }
                //             // console.log(givenCDFs[i][1]);
                //             // console.log(givenCDFs2[i][1]);
                //             // console.log('SC[1]: ', similarityCounter)
                //         }
                //         else if (givenCDFs[i][0] < 0){
                //             if (givenCDFs[i][1] >= givenCDFs3[i][1]){
                //                 similarityCounter += 1
                //             }
                //             else{
                //                 similarityCounter += 1 - Math.abs(givenCDFs[i][1] - givenCDFs3[i][1])
                //             }
                //             // console.log(givenCDFs[i][1]);
                //             // console.log(givenCDFs2[i][1]);
                //             // console.log('SC[2]: ', similarityCounter)
                //         }
                //     }
                //     similarityCounter = ((similarityCounter/givenCDFs.length) * 100).toFixed(1) + '%'

                //     svg.append("text")
                //         .attr("x", -150)
                //         .attr("y", 50)
                //         .attr("font-size", "108")
                //         .attr("fill", "Black")
                //         .text(similarityCounter)
                // }



                // else if (i === 4){

                // console.log(transformedData)
                // console.log(that.structureData[3])
                //     svg
                //         .selectAll('allSlices')
                //         .data(pie(transformedData))
                //         .enter()
                //         .append('path')
                //         .attr('d', arc)
                //         .attr('fill', function(d){
                //             let cdf = findTaxonCDFbyName(that.structureData[3], d.data.organism)
                //             // console.log(d.data.organism)
                //             // console.log(cdf)
                //             if (cdf === null){
                //                 return 'white'
                //             }
                //             if (d.data.weight < 0){
                //                 return '#d2691e'
                //             }
                //             else{
                //                 return '#003300'
                //             }
                //         })
                //         .attr("stroke", "white")
                //         .style("stroke-width", "2px")
                //         .style("opacity", 1);
                // }
                // else if (i === 5){
                //     svg
                //         .selectAll('allSlices')
                //         .data(pie(transformedData))
                //         .enter()
                //         .append('path')
                //         .attr('d', arc)
                //         .attr('fill', function(d){
                            
                //             let cdf = findTaxonCDFbyName(that.structureData[3], d.data.organism)
                //             let myWeight2 = findTaxonWeightbyName(transformedData3, d.data.organism)
                //             console.log(d.data.organism)
                //             console.log(cdf)
                //             console.log(myWeight2)
                //             if (cdf === null && myWeight2 === null){
                //                 return 'white'
                //             }
                //             if (d.data.weight < 0){
                //                 return '#d2691e'
                //             }
                //             else{
                //                 return '#003300'
                //             }
                //         })
                //         .attr("stroke", "white")
                //         .style("stroke-width", "2px")
                //         .style("opacity", 1);


                        // if (i === 4 || i === 5){
                    //     let nodeName = d.data.name
                    //     let lastIndex = nodeName.lastIndexOf('__')
                    //     let firstIndex = nodeName.indexOf('__')
                    //     let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    //     let taxonID = nodeName.substring(lastIndex + 2)

                    //     let myWeight
                    //     if (i === 4){
                    //         myWeight = findTaxonWeightbyName(transformedData, taxonName)
                    //     }
                    //     else if (i === 5){
                    //         myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                    //     } 

                    //     if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                    //         return "white"
                    //     }
                    //     else{
                    //         let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                    //         if (cdf === null){
                    //             cdf = 0
                    //         }
                            
                    //         let myWeight2 = findTaxonWeightbyName(transformedData3, taxonName)
                    //         // console.log(myWeight2)
                    //         // if (taxonName === 'Oscillospiraceae'){
                    //         //     console.log('Index: ', i)
                    //         //     console.log('A: ', cdf)   
                    //         //     console.log('Weight: ', myWeight)
                    //         //     console.log('Weights: ', myWeight2)
                    //         // }
                    //         if (myWeight2 !== null){
                    //             for (let i = 0; i < myWeight2.length; i++){
                    //                 if (myWeight2[i] < 0){
                    //                     cdf = (Number(cdf) + 0)/2
                    //                 }
                    //                 else if (myWeight2[i] > 0){ 
                    //                     cdf = (Number(cdf) + 1)/2
                    //                 }
                    //             }
                    //         }
                    //         // if (taxonName === 'Oscillospiraceae'){
                    //         //     console.log('B: ', cdf)
                    //         // }

                            
                    //         // if (cdf < 0){
                    //         //     return colorScaleLow(0)
                    //         // }
                    //         // else if (cdf >= 0 && cdf < sliderMin){
                    //         //     if (sliderMin === 0){
                    //         //         return "purple"
                    //         //     }
                    //         //     else{
                    //         //         return colorScaleLow(cdf)
                    //         //     }
                    //         // }
                    //         // else if (cdf >= sliderMax && cdf <= 1){
                    //         //     // console.log('A:', cdf)
                    //         //     if (sliderMax === 1){
                    //         //         return "purple"
                    //         //     }
                    //         //     else{
                    //         //         return colorScaleHigh(cdf)
                    //         //     }
                    //         // }
                    //         // else if (cdf > 1){
                    //         //     return colorScaleHigh(1)
                    //         // }
                    //         // else{
                    //         //     return "purple"
                    //         // }
                    //         // if (myWeight > 0){
                    //         //     let value = cdf * myWeight
                    //         //     console.log(indicatorHigh(value))
                    //         //     return indicatorHigh(value)
                    //         // }
                    //         // else{
                    //         //     let value = Math.abs((1-cdf) * myWeight)
                    //         //     // if (taxonName === 'Oscillospiraceae'){
                    //         //     //     console.log("value:", value)
                    //         //     // }
                    //         //     return indicatorLow(value)
                    //         // }
                    //         if (myWeight > 0){
                    //             return indicatorHigh(cdf)
                    //         }
                    //         else{
                    //             return indicatorLow(cdf)
                    //         }
                    //     }
                    // }
                // }
            }
            
            
        }
    }


}