USE BowserHotel
GO

CREATE TABLE DeltedServices (
	serviceId int NOT NULL PRIMARY KEY,
	name nvarchar(30) NOT NULL,
	maxPerson int NULL,
	price money null,
	dateDelete datetime NULL,


)


GO

CREATE TRIGGER Service_Delete
ON Services 
FOR DELETE
AS 
BEGIN
INSERT INTO DeletedServices (serviceId, name, maxPerson,price, dateDelete)
SELECT serviceId, name, maxPerson,ptice, GETDATE()  FROM deleted

DELETE Shedule FROM (SELECT * FROM deleted) AS Deleted 
			WHERE Shedule.serviceId = deleted.serviceId
END
