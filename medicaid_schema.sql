CREATE TABLE Drugs_medicaid (
    Drug_ID  SERIAL PRIMARY KEY,
    Brnd_Name VARCHAR(255) NOT NULL,
    Gnrc_Name VARCHAR(255) NOT NULL
);

CREATE TABLE Manufacturers_medicaid (
    Mftr_ID SERIAL PRIMARY KEY,
    Mftr_Name VARCHAR(255) NOT NULL
);

CREATE TABLE Drug_Manufacturer_medicaid  (
    Drug_ID INT,
    Mftr_ID INT,
    Tot_Mftr INT NOT NULL,
    PRIMARY KEY (Drug_ID, Mftr_ID),
    FOREIGN KEY (Drug_ID) REFERENCES Drugs_medicaid(Drug_ID),
    FOREIGN KEY (Mftr_ID) REFERENCES Manufacturers_medicaid(Mftr_ID)
);

CREATE TABLE Yearly_Spending_medicaid  (
    ID SERIAL PRIMARY KEY ,
    Drug_ID INT,
    Mftr_ID INT,
    Year SMALLINT,
    Tot_Spndng DECIMAL(15,2),
    Tot_Dsg_Unts DECIMAL(15,2),
    Tot_Clms INT,
    Avg_Spnd_Per_Dsg_Unt_Wghtd DECIMAL(15,2),
    Avg_Spnd_Per_Clm DECIMAL(15,2),
    Outlier_Flag BOOLEAN,
    FOREIGN KEY (Drug_ID) REFERENCES Drugs_medicaid(Drug_ID),
    FOREIGN KEY (Mftr_ID) REFERENCES Manufacturers_medicaid(Mftr_ID)
);
/*
CREATE TABLE Yearly_Aggregate_medicaid  (
    Drug_ID INT,
    Year SMALLINT,
    Chg_Avg_Spnd_Per_Dsg_Unt DECIMAL(10,4),
    CAGR_Avg_Spnd_Per_Dsg_Unt DECIMAL(10,4),
    PRIMARY KEY (Drug_ID, Year),
    FOREIGN KEY (Drug_ID) REFERENCES Drugs_medicaid(Drug_ID)
);
drop table Yearly_Aggregate_medicaid;

*/