# Project_3

Data Engineering Track:

For this track, your group will follow data engineering processes. Here are the specific requirements:

1. Data must be stored in a SQL or NoSQL database (PostgreSQL, MongoDB, SQLite, etc) and the database must include at least two tables (SQL) or collections (NoSQL).

2. The database must contain at least 100 records.

3. Your project must use ETL workflows to ingest data into the database (i.e. the data should not be exactly the same as the original source; it should have been transformed in some way).

4. Your project must include a method for reading data from the database and displaying it for future use, such as:

    Pandas DataFrame

    Flask API with JSON output

5. Your project must use one additional library not covered in class related to data engineering. Consider    libraries for data streaming, cloud, data pipelines, or data validation.

6. Your GitHub repo must include a README.md with an outline of the project including:

    An overview of the project and its purpose

    Instructions on how to use and interact with the project

    Documentation of the database used and why (e.g. benefits of SQL or NoSQL for this project)

    ETL workflow with diagrams or ERD

    At least one paragraph summarizing efforts for ethical considerations made in the project

    References for the data source(s)

    References for any code used that is not your own

OPTIONAL: add user-driven interaction, either before or after the ETL process. e.g.:

BEFORE: provide a menu of options for the user to narrow the range of data being extracted from a data source (e.g. API or CSV file, where fields are known in advance).

AFTER: Once the data is stored in the database, add user capability to extract filtered data from the database prior to loading it in a Pandas DataFrame or a JSON output from a Flask API.


DATA SOURCES:

    Medicare Data: https://catalog.data.gov/dataset/medicare-part-d-spending-by-drug-401d2

    Medicaid Data: https://catalog.data.gov/dataset/medicaid-spending-by-drug-b6f77


# Database Design 
Column Name	Data Type	Description
ID	INT	Primary Key, unique identifier for each record
Brnd_Name	VARCHAR(255)	Brand name of the drug
Gnrc_Name	VARCHAR(255)	Generic name of the drug
Tot_Mftr	INT	Total number of manufacturers
Mftr_Name	VARCHAR(255)	Name of the manufacturer
Tot_Spndng_2018	DECIMAL(15,2)	Total spending in 2018
Tot_Dsg_Unts_2018	DECIMAL(15,2)	Total dosage units in 2018
Tot_Clms_2018	INT	Total claims in 2018
Tot_Benes_2018	INT	Total beneficiaries in 2018
Avg_Spnd_Per_Dsg_Unt_Wghtd_2018	DECIMAL(15,2)	Average spending per dosage unit (weighted) in 2018
Avg_Spnd_Per_Clm_2018	DECIMAL(15,2)	Average spending per claim in 2018
Avg_Spnd_Per_Bene_2018	DECIMAL(15,2)	Average spending per beneficiary in 2018
Outlier_Flag_2018	BOOLEAN	Indicates if the data is an outlier in 2018
Tot_Spndng_2019	DECIMAL(15,2)	Total spending in 2019
Tot_Dsg_Unts_2019	DECIMAL(15,2)	Total dosage units in 2019
Tot_Clms_2019	INT	Total claims in 2019
Tot_Benes_2019	INT	Total beneficiaries in 2019
Avg_Spnd_Per_Dsg_Unt_Wghtd_2019	DECIMAL(15,2)	Average spending per dosage unit (weighted) in 2019
Avg_Spnd_Per_Clm_2019	DECIMAL(15,2)	Average spending per claim in 2019
Avg_Spnd_Per_Bene_2019	DECIMAL(15,2)	Average spending per beneficiary in 2019
Outlier_Flag_2019	BOOLEAN	Indicates if the data is an outlier in 2019
Tot_Spndng_2020	DECIMAL(15,2)	Total spending in 2020
Tot_Dsg_Unts_2020	DECIMAL(15,2)	Total dosage units in 2020
Tot_Clms_2020	INT	Total claims in 2020
Tot_Benes_2020	INT	Total beneficiaries in 2020
Avg_Spnd_Per_Dsg_Unt_Wghtd_2020	DECIMAL(15,2)	Average spending per dosage unit (weighted) in 2020
Avg_Spnd_Per_Clm_2020	DECIMAL(15,2)	Average spending per claim in 2020
Avg_Spnd_Per_Bene_2020	DECIMAL(15,2)	Average spending per beneficiary in 2020
Outlier_Flag_2020	BOOLEAN	Indicates if the data is an outlier in 2020
Tot_Spndng_2021	DECIMAL(15,2)	Total spending in 2021
Tot_Dsg_Unts_2021	DECIMAL(15,2)	Total dosage units in 2021
Tot_Clms_2021	INT	Total claims in 2021
Tot_Benes_2021	INT	Total beneficiaries in 2021
Avg_Spnd_Per_Dsg_Unt_Wghtd_2021	DECIMAL(15,2)	Average spending per dosage unit (weighted) in 2021
Avg_Spnd_Per_Clm_2021	DECIMAL(15,2)	Average spending per claim in 2021
Avg_Spnd_Per_Bene_2021	DECIMAL(15,2)	Average spending per beneficiary in 2021
Outlier_Flag_2021	BOOLEAN	Indicates if the data is an outlier in 2021
Tot_Spndng_2022	DECIMAL(15,2)	Total spending in 2022
Tot_Dsg_Unts_2022	DECIMAL(15,2)	Total dosage units in 2022
Tot_Clms_2022	INT	Total claims in 2022
Tot_Benes_2022	INT	Total beneficiaries in 2022
Avg_Spnd_Per_Dsg_Unt_Wghtd_2022	DECIMAL(15,2)	Average spending per dosage unit (weighted) in 2022
Avg_Spnd_Per_Clm_2022	DECIMAL(15,2)	Average spending per claim in 2022
Avg_Spnd_Per_Bene_2022	DECIMAL(15,2)	Average spending per beneficiary in 2022
Outlier_Flag_2022	BOOLEAN	Indicates if the data is an outlier in 2022
Chg_Avg_Spnd_Per_Dsg_Unt_21_22	DECIMAL(10,4)	Change in average spending per dosage unit from 2021 to 2022
CAGR_Avg_Spnd_Per_Dsg_Unt_18_22	DECIMAL(10,4)	Compound Annual Growth Rate of average spending per dosage unit from 2018 to 2022

Explanation
•	ID: A unique identifier for each record to act as the primary key.
•	Brnd_Name: The brand name of the drug.
•	Gnrc_Name: The generic name of the drug.
•	Tot_Mftr: The total number of manufacturers for the drug.
•	Mftr_Name: The name of the manufacturer.
•	Tot_Spndng_20XX: Total spending for the year specified.
•	Tot_Dsg_Unts_20XX: Total dosage units for the year specified.
•	Tot_Clms_20XX: Total claims for the year specified.
•	Tot_Benes_20XX: Total beneficiaries for the year specified.
•	Avg_Spnd_Per_Dsg_Unt_Wghtd_20XX: Average spending per dosage unit (weighted) for the year specified.
•	Avg_Spnd_Per_Clm_20XX: Average spending per claim for the year specified.
•	Avg_Spnd_Per_Bene_20XX: Average spending per beneficiary for the year specified.
•	Outlier_Flag_20XX: A boolean flag indicating if the data is an outlier for the year specified.
•	Chg_Avg_Spnd_Per_Dsg_Unt_21_22: Change in average spending per dosage unit from 2021 to 2022.
•	CAGR_Avg_Spnd_Per_Dsg_Unt_18_22: Compound Annual Growth Rate of average spending per dosage unit from 2018 to 2022.
Considerations
•	Ensure the database is normalized if needed, but since all data seems related to a single entity (drug spending data per year), a single table might be sufficient.
•	Data types are chosen based on typical sizes for the expected values, but they might need adjustment based on actual data ranges.



Steps for Normalization
1.	Identify entities and relationships.
2.	Break the data into multiple tables ensuring each table captures one type of entity.
3.	Establish relationships using foreign keys.
Based on your data, we can identify the following entities:
•	Drug Information: Basic details about the drug (brand and generic name).
•	Manufacturer: Information about the manufacturer.
•	Yearly Data: Annual financial and usage data for the drugs.
Proposed Tables and Relationships
1.	Drugs:
o	Contains unique information about each drug.
2.	Manufacturers:
o	Contains details about manufacturers.
3.	Drug_Manufacturer:
o	Manages the many-to-many relationship between drugs and manufacturers.
4.	Yearly_Spending:
o	Stores yearly spending and usage data related to each drug-manufacturer combination.
5.	Yearly_Aggregate:
o	Stores yearly aggregate statistics and derived data for a drug.



Schema Design
Table: Drugs
Column Name	Data Type	Description
Drug_ID	INT	Primary Key, unique identifier
Brnd_Name	VARCHAR(255)	Brand name of the drug
Gnrc_Name	VARCHAR(255)	Generic name of the drug
Table: Manufacturers
Column Name	Data Type	Description
Mftr_ID	INT	Primary Key, unique identifier
Mftr_Name	VARCHAR(255)	Name of the manufacturer
Table: Drug_Manufacturer
Column Name	Data Type	Description
Drug_ID	INT	Foreign Key referencing Drugs
Mftr_ID	INT	Foreign Key referencing Manufacturers
Tot_Mftr	INT	Total number of manufacturers
Primary Key: (Drug_ID, Mftr_ID)		



Table: Yearly_Spending
Column Name	Data Type	Description
ID	INT	Primary Key, unique identifier for each record
Drug_ID	INT	Foreign Key referencing Drugs
Mftr_ID	INT	Foreign Key referencing Manufacturers
Year	YEAR	The year of the data
Tot_Spndng	DECIMAL(15,2)	Total spending for the year
Tot_Dsg_Unts	DECIMAL(15,2)	Total dosage units for the year
Tot_Clms	INT	Total claims for the year
Tot_Benes	INT	Total beneficiaries for the year
Avg_Spnd_Per_Dsg_Unt_Wghtd	DECIMAL(15,2)	Average spending per dosage unit (weighted) for the year
Avg_Spnd_Per_Clm	DECIMAL(15,2)	Average spending per claim for the year
Avg_Spnd_Per_Bene	DECIMAL(15,2)	Average spending per beneficiary for the year
Outlier_Flag	BOOLEAN	Indicates if the data is an outlier for the year


Table: Yearly_Aggregate
Column Name	Data Type	Description
Drug_ID	INT	Foreign Key referencing Drugs
Year	YEAR	The year of the data
Chg_Avg_Spnd_Per_Dsg_Unt	DECIMAL(10,4)	Change in average spending per dosage unit from previous year
CAGR_Avg_Spnd_Per_Dsg_Unt	DECIMAL(10,4)	Compound Annual Growth Rate of average spending per dosage unit over the years


Relationships and Foreign Keys
•	Drugs to Drug_Manufacturer: One-to-many (a drug can have multiple manufacturers).
•	Manufacturers to Drug_Manufacturer: One-to-many (a manufacturer can be associated with multiple drugs).
•	Drug_Manufacturer to Yearly_Spending: One-to-many (a specific drug-manufacturer combination has yearly data).
•	Drugs to Yearly_Aggregate: One-to-many (each drug has yearly aggregate statistics).




    
