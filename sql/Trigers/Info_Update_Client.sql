USE BowserHotel
GO 

CREATE TABLE UpdatedClients (
	clientId int NOT NULL,
	updateDate datetime NULL,
	newPhone nvarchar(20) NULL,
	newEmail nvarchar(30) NULL
)

USE BowserHotel
GO 

CREATE TRIGGER Info_UpdateClients 
ON Clients 
FOR UPDATE
AS 
INSERT INTO UpdatedClients (clientId, updateDate, newPhone,  newEmail)
SELECT clientId,GETDATE(), phoneNumber, email  FROM updated 