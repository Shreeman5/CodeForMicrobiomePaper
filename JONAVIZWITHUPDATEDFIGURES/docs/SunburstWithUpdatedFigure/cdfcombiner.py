import pandas as pd

# Load the CSV files
file1_path = "CSVs/AggregateFiles/SRR5950737_Crohn's Disease_aggregate.csv"
file2_path = "CSVs/AggregateFiles/SRR5950737_Crohn's_Omega-3 Fatty Acids.csv"
file3_path = "CSVs/AggregateFiles/SRR5950737_Crohn's_Resistant Starch.csv"
file4_path = "CSVs/AggregateFiles/SRR5950737_Crohn's_Vitamin D.csv"


df1 = pd.read_csv(file1_path)
df2 = pd.read_csv(file2_path)
df3 = pd.read_csv(file3_path)
df4 = pd.read_csv(file4_path)


# Ensure the relevant columns exist in both files
if "ncbi_taxon_id" in df1.columns and "CDF" in df1.columns and "ncbi_taxon_id" in df2.columns and "CDF" in df2.columns and "ncbi_taxon_id" in df3.columns and "CDF" in df3.columns and "ncbi_taxon_id" in df4.columns and "CDF" in df4.columns :
    # Merge data based on ncbi_taxon_id, keeping all records from df1
    df1["CDF1"] = df1["ncbi_taxon_id"].map(df2.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["CDF2"] = df1["ncbi_taxon_id"].map(df3.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    df1["CDF3"] = df1["ncbi_taxon_id"].map(df4.set_index("ncbi_taxon_id")["CDF"]).fillna("n/a")
    
    # Save the updated file
    updated_file_path = "SRR5950737_Crohn's Disease_aggregate.csv"
    df1.to_csv(updated_file_path, index=False)
    print(f"Updated file saved as: {updated_file_path}")
else:
    print("Error: Required columns are missing in one or both files.")