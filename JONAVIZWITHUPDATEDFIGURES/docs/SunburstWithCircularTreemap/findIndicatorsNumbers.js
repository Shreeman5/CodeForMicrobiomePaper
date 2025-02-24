// Finds the disease indicators(given all the diseases) and find their number of occurences
class FindIndicators{

    constructor(diseaseIndicatorsData){
        this.diseaseIndicatorsData = diseaseIndicatorsData
    }

    returnIndicators(){
        let myArray = []
        let myArray2 = []
        let myArray3 = []
        let myArray4 = []
        for (let i = 0; i < this.diseaseIndicatorsData.length; i++) {
            const obj = this.diseaseIndicatorsData[i];
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (key !== "Collection" && key !== "Name"){
                        let myVal = obj[key]

                        const firstCloseBracketIndex = myVal.indexOf('[')
                        const firstOpenParenIndex = myVal.indexOf(']');
                        const result = myVal.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                        let match3 = myVal.match(/\((-?\d+(?:\.\d+)?)\)/);
                        let number2 = match3 ? match3[1] : null;
                        
                        
                        if (result !== ''){
                            let bool = /^\d+$/.test(result);
                            if (bool){
                                if (myArray.includes(result)){
                                    for (let obj of myArray4) {
                                        if (obj.hasOwnProperty(result)){
                                            obj[result] += 1
                                        }
                                    }
                                }
                                else{
                                    myArray.push(result)
                                    if (parseFloat(number2) > 0){
                                        myArray2.push(result)
                                    }
                                    else if (parseFloat(number2) < 0){
                                        myArray3.push(result)
                                    }
                                    if (parseFloat(number2) === 0){
                                        if (number2.length === 3){
                                            myArray2.push(result)
                                        }
                                        else if (number2.length === 4){
                                            myArray3.push(result)
                                        }
                                    }
                                    let keyValuePair = {}
                                    keyValuePair[result] = 1
                                    myArray4.push(keyValuePair)
                                }
                            }
                            else{
                                const firstStop = myVal.indexOf(']')
                                const secondStop = myVal.indexOf('(');
                                const result2 = myVal.substring(firstStop+1, secondStop).trim();

                                let match3 = myVal.match(/\((-?\d+(?:\.\d+)?)\)/);
                                let number2 = match3 ? match3[1] : null;


                                if (result2 === 'Shigella'){
                                    if (myArray.includes('620')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('620')){
                                                obj['620'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('620')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('620')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('620')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('620')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('620')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['620'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Akkermansia muciniphila'){
                                    if (myArray.includes('239935')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('239935')){
                                                obj['239935'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('239935')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('239935')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('239935')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('239935')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('239935')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['239935'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium bifidum'){
                                    if (myArray.includes('1681')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1681')){
                                                obj['1681'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1681')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1681')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1681')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1681')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1681')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1681'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium breve'){
                                    if (myArray.includes('1685')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1685')){
                                                obj['1685'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1685')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1685')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1685')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1685')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1685')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1685'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium longum subsp. infantis'){
                                    if (myArray.includes('1682')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1682')){
                                                obj['1682'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1682')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1682')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1682')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1682')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1682')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1682'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium longum'){
                                    if (myArray.includes('216816')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('216816')){
                                                obj['216816'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('216816')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('216816')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('216816')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('216816')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('216816')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['216816'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium animalis'){
                                    if (myArray.includes('28025')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('28025')){
                                                obj['28025'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('28025')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('28025')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('28025')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('28025')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('28025')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['28025'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lactobacillus acidophilus'){
                                    if (myArray.includes('1579')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1579')){
                                                obj['1579'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1579')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1579')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1579')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1579')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1579')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1579'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Levilactobacillus brevis'){
                                    if (myArray.includes('1580')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1580')){
                                                obj['1580'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1580')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1580')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1580')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1580')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1580')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1580'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Pediococcus acidilactici'){
                                    if (myArray.includes('1254')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1254')){
                                                obj['1254'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1254')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1254')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1254')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1254')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1254')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1254'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bifidobacterium animalis subsp. lactis Bl-04'){
                                    if (myArray.includes('580050')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('580050')){
                                                obj['580050'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('580050')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('580050')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('580050')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('580050')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('580050')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['580050'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Ligilactobacillus salivarius'){
                                    if (myArray.includes('1624')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1624')){
                                                obj['1624'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1624')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1624')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1624')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1624')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1624')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1624'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Streptococcus salivarius'){
                                    if (myArray.includes('1304')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1304')){
                                                obj['1304'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1304')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1304')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1304')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1304')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1304')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1304'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Campylobacter'){
                                    if (myArray.includes('194')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('194')){
                                                obj['194'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('194')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('194')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('194')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('194')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('194')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['194'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Clostridioides difficile'){
                                    if (myArray.includes('1496')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1496')){
                                                obj['1496'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1496')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1496')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1496')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1496')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1496')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1496'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Latilactobacillus sakei'){
                                    if (myArray.includes('1599')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1599')){
                                                obj['1599'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1599')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1599')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1599')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1599')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1599')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1599'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lactobacillus gasseri'){
                                    if (myArray.includes('1596')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1596')){
                                                obj['1596'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1596')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1596')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1596')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1596')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1596')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1596'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Klebsiella oxytoca'){
                                    if (myArray.includes('571')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('571')){
                                                obj['571'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('571')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('571')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('571')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('571')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('571')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['571'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lacticaseibacillus paracasei'){
                                    if (myArray.includes('1597')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1597')){
                                                obj['1597'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1597')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1597')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1597')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1597')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1597')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1597'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lactiplantibacillus plantarum'){
                                    if (myArray.includes('1590')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1590')){
                                                obj['1590'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1590')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1590')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1590')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1590')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1590')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1590'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Streptococcus thermophilus'){
                                    if (myArray.includes('1308')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1308')){
                                                obj['1308'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1308')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1308')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1308')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1308')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1308')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1308'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lactobacillus crispatus'){
                                    if (myArray.includes('47770')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('47770')){
                                                obj['47770'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('47770')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('47770')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('47770')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('47770')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('47770')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['47770'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Bacillus subtilis'){
                                    if (myArray.includes('1423')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1423')){
                                                obj['1423'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1423')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1423')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1423')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1423')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1423')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1423'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Clostridium perfringens'){
                                    if (myArray.includes('1502')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1502')){
                                                obj['1502'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1502')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1502')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1502')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1502')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1502')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1502'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Staphylococcus aureus'){
                                    if (myArray.includes('1280')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1280')){
                                                obj['1280'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1280')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1280')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1280')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1280')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1280')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1280'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Lactococcus lactis'){
                                    if (myArray.includes('1358')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('1358')){
                                                obj['1358'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('1358')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('1358')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('1358')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('1358')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('1358')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['1358'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Vibrio cholerae'){
                                    if (myArray.includes('666')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('666')){
                                                obj['666'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('666')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('666')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('666')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('666')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('666')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['666'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Yersinia enterocolitica'){
                                    if (myArray.includes('630')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('630')){
                                                obj['630'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('630')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('630')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('630')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('630')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('630')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['630'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                                else if (result2 === 'Salmonella enterica'){
                                    if (myArray.includes('28901')){
                                        for (let obj of myArray4) {
                                            if (obj.hasOwnProperty('28901')){
                                                obj['28901'] += 1
                                            }
                                        }
                                    }
                                    else{
                                        myArray.push('28901')
                                        if (parseFloat(number2) > 0){
                                            myArray2.push('28901')
                                        }
                                        else if (parseFloat(number2) < 0){
                                            myArray3.push('28901')
                                        }
                                        if (parseFloat(number2) === 0){
                                            if (number2.length === 3){
                                                myArray2.push('28901')
                                            }
                                            else if (number2.length === 4){
                                                myArray3.push('28901')
                                            }
                                        }
                                        let keyValuePair = {}
                                        keyValuePair['28901'] = 1
                                        myArray4.push(keyValuePair)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return [myArray, myArray2, myArray3, myArray4]
    }
}











