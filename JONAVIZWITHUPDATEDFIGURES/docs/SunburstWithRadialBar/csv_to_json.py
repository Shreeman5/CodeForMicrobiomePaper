# This file taxes taxonomy.csv as an input and outputs taxonomy.json,
# which serves as a basis to render the sunburst structures in the
# visualization.
import json
import pandas as pd

#convert csv rows to strings
def process_rows(filename):
    df = pd.read_csv(filename)
    rows_strings = []
    for index, row in df.iterrows():
        end_column = len(row)
        while end_column > 0 and pd.isnull(row[end_column - 1]):
            end_column -= 1
        row_data = row.iloc[2:3].tolist()
        row_string = ';'.join(map(str, row_data))
        rows_strings.append(row_string)
    return rows_strings

# make json structure(nested loops) of strings
def create_json_from_lineage(lineage):
    nested_json = {}
    current_level = nested_json
    levels = lineage.split('--')[0].split(';')
    weight = 0.0
    for idx, level in enumerate(levels):
        if idx == len(levels) - 1:  # Last level (leaf)
            current_level[level] = weight
        else:
            current_level[level] = {}
            current_level = current_level[level]
    return nested_json

# merge individual json structures into one big json structure(many nested loops)
def merge_json_trees(tree1, tree2):
    for key, value in tree2.items():
        if key in tree1 and isinstance(tree1[key], dict) and isinstance(value, dict):
            merge_json_trees(tree1[key], value)
        elif key in tree1 and isinstance(tree1[key], dict) and not isinstance(value, dict):
            pass
        else:
            tree1[key] = value
    return tree1

# convert merged json structure into a hierarchical structure fit for use in visualization
def convert_to_hierarchical(data):
    if isinstance(data, dict):
        key = next(iter(data))
        children = [{"name": k, "value": v} if isinstance(v, (float, int)) else convert_to_hierarchical({k: v}) for k, v in data[key].items()]
        return {"name": key, "children": children}
    elif isinstance(data, float) or isinstance(data, int):
        return data

#script
def main():
    fileName = "taxonomy"
    lineage_strings = process_rows("CSVs/AggregateFiles/"+fileName+".csv")  
    startingTree = create_json_from_lineage(lineage_strings[0])
    startingTree2 = create_json_from_lineage(lineage_strings[1])
    combinedTree = merge_json_trees(startingTree, startingTree2)
    for i in range(2, len(lineage_strings)):
        currentTree = create_json_from_lineage(lineage_strings[i])
        combinedTree =  merge_json_trees(combinedTree, currentTree)
    hierarchical_data = convert_to_hierarchical(combinedTree)
    file_path = fileName+".json"
    # Write hierarchical data to the JSON file
    with open(file_path, "w") as json_file:
        json.dump(hierarchical_data, json_file, indent=4)
    
if __name__ == "__main__":
    main()


















