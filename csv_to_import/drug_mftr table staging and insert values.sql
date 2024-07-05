CREATE TABLE Drug_Manufacturer_Staging (
    drug_name VARCHAR(255),
    mftr_name VARCHAR(255),
    tot_mftr INT
);
select * from Drug_Manufacturer_Staging
  
  
--------------------------------------------------------------------------------
INSERT INTO Drug_Manufacturer_medicare (Drug_ID, Mftr_ID, Tot_Mftr)
SELECT
    d.Drug_ID,
    m.Mftr_ID,
    s.tot_mftr
FROM
    Drug_Manufacturer_Staging s
JOIN
    Drugs_medicare d ON s.drug_name = d.brnd_name
JOIN
    Manufacturers_medicare m ON s.mftr_name = m.mftr_name;
	
------------------------------------------------------------------------------------

CREATE TABLE Yearly_Spending_medicare_staging  (
    Brnd_Name VARCHAR(255) NOT NULL,
	Mftr_Name VARCHAR(255) NOT NULL,
    Year SMALLINT,
    Tot_Spndng DECIMAL(15,2),
    Tot_Dsg_Unts DECIMAL(15,2),
    Tot_Clms INT,
    Tot_Benes INT,
    Avg_Spnd_Per_Dsg_Unt_Wghtd DECIMAL(15,2),
    Avg_Spnd_Per_Clm DECIMAL(15,2),
    Avg_Spnd_Per_Bene DECIMAL(15,2),
    Outlier_Flag BOOLEAN
	
	
	
--------------------------------------------------------------------------------------
	
	
INSERT INTO Yearly_Spending_medicare  (
	Drug_ID, 
	Mftr_ID, 
	Year,
    Tot_Spndng,
    Tot_Dsg_Unts,
    Tot_Clms,
    Tot_Benes,
    Avg_Spnd_Per_Dsg_Unt_Wghtd,
    Avg_Spnd_Per_Clm,
    Avg_Spnd_Per_Bene,
    Outlier_Flag)
SELECT
    d.Drug_ID,
    m.Mftr_ID,
    s.Year,
	s.Tot_Spndng,
    s.Tot_Dsg_Unts,
    s.Tot_Clms,
    s.Tot_Benes,
    s.Avg_Spnd_Per_Dsg_Unt_Wghtd,
    s.Avg_Spnd_Per_Clm,
    s.Avg_Spnd_Per_Bene,
    s.Outlier_Flag
FROM
    Yearly_Spending_medicare_staging s
JOIN
    Drugs_medicare d ON s.brnd_name = d.brnd_name
JOIN
    Manufacturers_medicare m ON s.mftr_name = m.mftr_name;
