USE BowserHotel
GO


CREATE TRIGGER Clients_Delete
ON Clients
INSTEAD OF DELETE
AS 
UPDATE Clients
SET status = 'deleted'
WHERE clientId = (SELECT clientId FROM deleted) 

