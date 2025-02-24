// find Taxon CDF by ID
function findTaxonCDFbyID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.CDF : null;
}

// find Taxon CDF by Name
function findTaxonCDFbyName(dataArray, taxonName){
    const element = dataArray.find(item => item.name === taxonName);
    return element ? element.CDF : null;
}

// find Taxon Weight by ID
function findTaxonWeightbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.weight;
        }
    }
    return null;
}

// find Taxon Weight by Name
function findTaxonWeightbyName(dataArray, taxonName){
    for (let obj of dataArray) {
        if (obj.organism === taxonName) {
            return obj.weight;
        }
    }
    return null;
}

// find action by ID
function findNamesbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.action;
        }
    }
    return null;
}

// find action by name
function findNamesbyName(dataArray, taxonName){
    for (let obj of dataArray) {
        if (obj.organism === taxonName) {
            return obj.action;
        }
    }
    return null;
}

// find taxon name by ID
function findTaxonNamebyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.organism;
        }
    }
    return null; 
}

// map names based on value
function nameMapping(val){
    if (val === 's'){
        return "species"
    }
    else if (val === 'g'){
        return "genus"
    }
    else if (val === 'f'){
        return "family"
    }
    else if (val === 'o'){
        return "order"
    }
    else if (val === 'c'){
        return "class"
    }
    else if (val === 'p'){
        return "phylum"
    }
    else if (val === 'sk'){
        return "superkingdom"
    }
    return ""
}

// find node's child by name
function findChildByName(node, targetName) {
    if (node.name === targetName) {
        return node;
    }
    
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findChildByName(child, targetName);
            if (result) {
                return result; 
            }
        }
    }
    return null;
}

// find node's parent by name
function findParentByName(node, targetName, parent = null) {
    if (node.name === targetName) {
        return parent;
    }
    
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findParentByName(child, targetName, node);
            if (result) {
                return result; 
            }
        }
    }
    
    return null;
}


// find node abundance by ID
function findNodeValueByID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.relative_abundance : null; 
}

// find node abundance by name
function findNodeValueByName(dataArray, taxonName) {
    const element = dataArray.find(item => item.name === taxonName);
    return element ? element.relative_abundance : null; 
}

// assign value to each node 
function assignValues(node) {
    if (!node.children || node.children.length === 0) {
      node.value = 1; 
    } else {
      for (let child of node.children) {
        this.assignValues(child);
      }
    }
}

// reasign assign based on removal of depths
function reassignChildren(root, w, x) {
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
        if (node.depth === x && (!node.children || node.children.length === 0)) {
            if (node.parent) {
                node.parent.children = node.parent.children.filter(n => n !== node);
            }
        }
        if (node.children && node.children.length === 0) {
            delete node.children;
        }
    });

    return root;
}

// adjust depths after depths are removed
function adjustDepths(root, removedDepth) {
    root.each(node => {
        if (node.depth > removedDepth) {
            node.depth -= 1;
        }
    });
    return root;
}